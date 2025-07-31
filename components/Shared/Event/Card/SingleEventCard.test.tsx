import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { EventCard } from "./SingleEventCard";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";

// Mocking next/navigation's useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("EventCard", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  const sampleEvent = {
    name: "Sample Event",
    dateTime: "Tuesday & Thursday, 6:30 - 8:00 PM",
    price: "$10",
    location: "Engineering building, Room 101",
    imageUrl: "/sample.jpg",
  };

  it("renders event details correctly", () => {
    render(<EventCard event={sampleEvent} />);

    expect(screen.getByText("Sample Event")).toBeInTheDocument();
    expect(screen.getByText(/Date & Time/i)).toHaveTextContent(
      "Tuesday & Thursday, 6:30 - 8:00 PM",
    );
    expect(screen.getByText(/Entry Price/i)).toHaveTextContent("$10");
    expect(screen.getByText(/Location/i)).toHaveTextContent(
      "Engineering building, Room 101",
    );
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      expect.stringContaining("sample.jpg"),
    );
  });

  it("navigates to /signup on button click", () => {
    render(<EventCard event={sampleEvent} />);
    const signUpButton = screen.getByRole("button", { name: /sign up/i });

    fireEvent.click(signUpButton);
    expect(mockPush).toHaveBeenCalledWith("/signup");
  });
});
