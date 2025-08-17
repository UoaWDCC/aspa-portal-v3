import { CollectionConfig } from "payload";

const Games: CollectionConfig = {
  slug: "games",
  admin: {
    group: "Games",
  },
  fields: [
    {
      name: "player1",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "player2",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Accepted", value: "accepted" },
        { label: "Completed", value: "completed" },
        { label: "Cancelled", value: "cancelled" },
      ],
      defaultValue: "pending",
    },
    {
      name: "winner",
      type: "relationship",
      relationTo: "users",
      admin: {
        condition: (data) => data.status === "completed",
      },
    },
    {
      name: "player1Confirmation",
      type: "select",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Player 1 Won", value: "player1" },
        { label: "Player 2 Won", value: "player2" },
      ],
      defaultValue: "pending",
    },
    {
      name: "player2Confirmation",
      type: "select",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Player 1 Won", value: "player1" },
        { label: "Player 2 Won", value: "player2" },
      ],
      defaultValue: "pending",
    },
    {
      name: "eloChange",
      type: "number",
      admin: {
        condition: (data) => data.status === "completed",
      },
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation === "update" && doc.status === "accepted") {
          // Check if both players have confirmed the same result
          if (
            doc.player1Confirmation !== "pending" &&
            doc.player2Confirmation !== "pending" &&
            doc.player1Confirmation === doc.player2Confirmation
          ) {
            // Both players agree on the result, calculate ELO
            await calculateAndUpdateELO(doc, req.payload);
          }
        }
      },
    ],
  },
};

async function calculateAndUpdateELO(game: any, payload: any) {
  const player1 = await payload.findByID({
    collection: "users",
    id: game.player1,
  });

  const player2 = await payload.findByID({
    collection: "users",
    id: game.player2,
  });

  const K = 32; // ELO K-factor
  const player1Rating = player1.elo;
  const player2Rating = player2.elo;

  // Calculate expected scores
  const expectedScore1 =
    1 / (1 + 10 ** ((player2Rating - player1Rating) / 400));
  const expectedScore2 =
    1 / (1 + 10 ** ((player1Rating - player2Rating) / 400));

  // Determine actual scores based on winner
  const winner =
    game.player1Confirmation === "player1" ? game.player1 : game.player2;
  const actualScore1 = winner === game.player1 ? 1 : 0;
  const actualScore2 = winner === game.player2 ? 1 : 0;

  // Calculate new ratings
  const newRating1 = Math.round(
    player1Rating + K * (actualScore1 - expectedScore1),
  );
  const newRating2 = Math.round(
    player2Rating + K * (actualScore2 - expectedScore2),
  );

  const eloChange = Math.abs(newRating1 - player1Rating);

  // Update players' ELO
  await payload.update({
    collection: "users",
    id: game.player1,
    data: { elo: newRating1 },
  });

  await payload.update({
    collection: "users",
    id: game.player2,
    data: { elo: newRating2 },
  });

  // Update game status
  await payload.update({
    collection: "games",
    id: game.id,
    data: {
      status: "completed",
      winner,
      eloChange,
    },
  });
}

export default Games;
