import React from "react";
import { Button } from "../../Shared/Button/Button";
import { Paper, Title, Text, Box, Container, Group } from "@mantine/core";

interface MatchFoundProps {
  eventName?: string;
  player1Name: string;
  player1Ball: number;
  player2Name: string;
  player2Ball: number;
  onStart: () => void;
}

const MatchFound: React.FC<MatchFoundProps> = ({
  eventName = "EVENT NAME",
  player1Name,
  player1Ball,
  player2Name,
  player2Ball,
  onStart,
}) => {
  return (
    <Container
      fluid
      p={0}
      h="100vh"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Paper
        radius={0}
        w="100%"
        h="100%"
        p={0}
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Event name header */}
        <Box bg="#212121" py="xl" px="md" ta="center">
          <Title order={2} c="#717882" size="h4" fw={500} tt="uppercase">
            {eventName}
          </Title>
        </Box>

        {/* Match found announcement */}
        <Box bg="#212121" py="md" px="md" ta="center">
          <Title order={2} c="white" size="h3" fw={500}>
            MATCH FOUND!
          </Title>
        </Box>

        {/* Player 1 info */}
        <Group
          bg="#717882"
          py="xl"
          px="md"
          justify="center"
          align="center"
          gap="xl"
        >
          <Box ta="center">
            <Title order={3} c="white" size="md" fw={500}>
              {player1Name}
            </Title>
            <Text c="#ddd" size="sm">
              Ball {player1Ball}
            </Text>
          </Box>
          {/* Temporary placeholder for ball image */}
          <Box>Ball</Box>
        </Group>

        {/* VS divider */}
        <Box bg="#1a1a1a" py="md" px="md" ta="center">
          <Title order={2} c="white" size="h4" fw={700}>
            VS
          </Title>
        </Box>

        {/* Player 2 info */}
        <Group
          bg="#717882"
          py="xl"
          px="md"
          justify="center"
          align="center"
          gap="xl"
        >
          <Box ta="center">
            <Title order={3} c="white" size="md" fw={500}>
              {player2Name}
            </Title>
            <Text c="#ddd" size="sm">
              Ball {player2Ball}
            </Text>
          </Box>
          {/* Temporary placeholder for ball image */}
          <Box>Ball</Box>
        </Group>

        {/* Start button section */}
        <Box
          bg="#1a1a1a"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Button outlined variant="h5">
            START
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default MatchFound;
