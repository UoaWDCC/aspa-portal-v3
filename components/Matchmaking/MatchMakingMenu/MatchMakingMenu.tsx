import React from "react";
import { Button } from "../../Shared/Button/Button";
import {
  Paper,
  Title,
  Text,
  Stack,
  Group,
  Box,
  Container,
} from "@mantine/core";

interface MatchmakingMenuProps {
  eventName?: string;
  playerName: string;
  ballNumber: number;
  onMatchSelect: (matchType: "ranked" | "casual" | "private") => void;
}

const MatchmakingMenu: React.FC<MatchmakingMenuProps> = ({
  eventName = "EVENT NAME",
  playerName,
  ballNumber,
  onMatchSelect,
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
        <Box bg="#212121" py="xl" px="md" ta="center">
          <Title order={2} c="#717882" size="h4" fw={500} tt="uppercase">
            {eventName}
          </Title>
        </Box>

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
              {playerName}
            </Title>
            <Text c="#ddd" size="sm">
              Ball {ballNumber}
            </Text>
          </Box>
          <Box>Ball</Box>
        </Group>

        <Box
          bg="#1a1a1a"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Stack
            py="50px"
            px="xl"
            gap="xl"
            w="100%"
            maw="500px"
            mx="auto"
            style={{ flex: 1 }}
          >
            <Button outlined variant="h5">
              RANKED MATCH
            </Button>

            <Button outlined variant="h5">
              CASUAL MATCH
            </Button>

            <Button outlined variant="h5">
              PRIVATE MATCH
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default MatchmakingMenu;
