import React from "react";
import {
  MantineProvider,
  TextInput,
  Text,
  Group,
  Select,
  Button,
  Stack,
} from "@mantine/core";
import styles from "./Search.module.css";
import { Event } from "@/payload-types";

interface SearchProps {
  filter: string;
  setFilter: (value: string) => void;
  year?: string;
  setYear?: (value: string) => void;
  month?: string;
  setMonth?: (value: string) => void;
  location?: string;
  setLocation?: (value: string) => void;
  yearOptions?: string[];
  locationOptions?: string[];
  dropdownColor?: string;
  textColor?: string;
}

export const Search: React.FC<SearchProps> = ({
  filter,
  setFilter,
  year,
  setYear,
  month,
  setMonth,
  location,
  setLocation,
  yearOptions = ["Any", "2021", "2022", "2023", "2024"],
  locationOptions = ["Any", "Orange Pool Club"],
  dropdownColor = "#717882",
  textColor = "#000000",
}) => {
  //filtering logic, move to parent component
  const filterEvents = (events: Event[]) => {
    return events.filter((event) => {
      const eventMonth =
        event.dateTime &&
        new Date(event.dateTime).toLocaleString("default", {
          month: "long",
        });
      const eventYear =
        event.dateTime && new Date(event.dateTime).getFullYear().toString();
      return (
        (filter === "" ||
          event.name.toLowerCase().includes(filter.toLowerCase())) &&
        (year === "Any" || eventYear === year) &&
        (month === "Any" || eventMonth === month) &&
        (location === "Any" || event.location === location)
      );
    });
  };

  return (
    <MantineProvider>
      <Stack className={styles.search} style={{ color: textColor }}>
        <Group className={styles.searchGroup}>
          <Text size="xl" fw={700}>
            Search Event
          </Text>
          <Group className={styles.searchBarGroup}>
            <TextInput
              className={styles.searchBar}
              value={filter ?? ""}
              onChange={(e) => setFilter(e.currentTarget.value)}
              styles={{
                input: {
                  borderRadius: "0px",
                  border: "1px solid #ccc",
                },
              }}
            />
            <Button
              variant="outline"
              onClick={() => {
                if (setYear) {
                  setYear("Any");
                }
                if (setMonth) {
                  setMonth("Any");
                }
                if (setLocation) {
                  setLocation("Any");
                }
              }}
              styles={{
                root: {
                  height: "37px",
                  borderRadius: "0px",
                  border: "1px solid #ccc",
                  color: "#000",
                },
              }}
            >
              Clear Filters
            </Button>
          </Group>
        </Group>

        <Group className={styles.dropdownGroup}>
          <Group className={styles.dropdownItem}>
            <Text fw={700}>Year</Text>
            <Select
              data={yearOptions}
              value={year}
              onChange={setYear ? (v) => setYear(v ?? "") : () => {}}
              styles={{
                input: {
                  backgroundColor: dropdownColor,
                  borderRadius: "0px",
                  width: "100%",
                  maxWidth: "400px",
                },
              }}
            />
          </Group>
          <Group className={styles.dropdownItem}>
            <Text fw={700}>Month</Text>
            <Select
              data={[
                "Any",
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ]}
              value={month}
              onChange={setMonth ? (v) => setMonth(v ?? "") : () => {}}
              styles={{
                input: {
                  backgroundColor: dropdownColor,
                  borderRadius: "0px",
                  width: "100%",
                  maxWidth: "400px",
                },
              }}
            />
          </Group>
          <Group className={styles.dropdownItem}>
            <Text fw={700}>Location</Text>
            <Select
              data={locationOptions}
              value={location}
              onChange={setLocation ? (v) => setLocation(v ?? "") : () => {}}
              styles={{
                input: {
                  backgroundColor: dropdownColor,
                  borderRadius: "0px",
                  width: "100%",
                  maxWidth: "400px",
                },
              }}
            />
          </Group>
        </Group>
      </Stack>
    </MantineProvider>
  );
};
