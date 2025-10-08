import React from "react";
import { Search } from "./Search";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";

const filter = "Test";
const setFilter = jest.fn();
const year = "2022";
const setYear = jest.fn();
const month = "October";
const setMonth = jest.fn();
const location = "Orange Pool Club";
const setLocation = jest.fn();

describe("Search", () => {
  it("should clear all filters", async () => {
    render(
      <Search
        filter={filter}
        setFilter={setFilter}
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
        location={location}
        setLocation={setLocation}
      />,
    );
    const clearFiltersButton = screen.getAllByText("Clear Filters")[0];
    await userEvent.click(clearFiltersButton);

    expect(setYear).toHaveBeenCalledWith("Any");
    expect(setMonth).toHaveBeenCalledWith("Any");
    expect(setLocation).toHaveBeenCalledWith("Any");
  });
});
