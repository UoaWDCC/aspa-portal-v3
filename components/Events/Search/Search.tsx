import React from "react";
import { TextInput, Text, Group, Select } from "@mantine/core";

interface SearchBarProps {
  filter: string;
  setFilter: (value: string) => void;
  year?: string;
  setYear?: (value: string) => void;
  month?: string;
  setMonth?: (value: string) => void;
  location?: string;
  setLocation?: (value: string) => void;
}

const Dropdown: React.FC<{
  value: string | null;
  onChange: (value: string | null) => void;
  options: string[];
  text: string;
}> = ({ value, onChange, options, text }) => {
  return (
    <Group>
      <Text>{text}</Text>
      <Select data={options} value={value} onChange={onChange} />
    </Group>
  );
};

export const SearchBar: React.FC<SearchBarProps> = ({
  filter,
  setFilter,
  year,
  setYear,
  month,
  setMonth,
  location,
  setLocation,
}) => {
  return (
    <div>
      <Group>
        <Text>Search</Text>
        <TextInput
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
        />
      </Group>
      <Group>
        <Dropdown
          value={year ?? "Any"}
          onChange={setYear}
          options={["Any", "2021", "2022", "2023", "2024"]}
          text="Year"
        />
        <Dropdown
          value={month ?? "Any"}
          onChange={setMonth}
          options={[
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
          text="Month"
        />
        <Dropdown
          value={location ?? "Any"}
          onChange={setLocation}
          options={["Any", "Orange Pool Club"]}
          text="Location"
        />
      </Group>
    </div>
  );
};
