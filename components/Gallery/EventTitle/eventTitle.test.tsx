import { render, screen } from "@/test-utils";
import EventTitle from "./eventTitle";

describe("EventTitle component", () => {
  it("renders text correctly", () => {
    render(
      <EventTitle
        event={{
          title: "ASPA test event",
          year: 2024,
          month: "November",
          day: "15th",
          location: "ASPA Headquarters",
          photos: [
            {
              id: 1,
              src: "/aspa_logo.svg",
              alt: "ASPA Logo",
            },
          ],
        }}
      />,
    );
    expect(screen.getByText("ASPA test event")).toBeInTheDocument();
    expect(screen.getByText("2024")).toBeInTheDocument();
    expect(screen.getByText("November 15th")).toBeInTheDocument();
    expect(screen.getByText("ASPA Headquarters")).toBeInTheDocument();
  });

  it("renders correctly on desktop and mobile", () => {
    // Desktop
    global.innerWidth = 1200;
    global.dispatchEvent(new Event("resize"));
    const { rerender } = render(
      <EventTitle
        event={{
          title: "ASPA test event",
          year: 2024,
          month: "November",
          day: "15th",
          location: "ASPA Headquarters",
          photos: [
            {
              id: 1,
              src: "/aspa_logo.svg",
              alt: "ASPA Logo",
            },
          ],
        }}
      />,
    );
    expect(screen.getAllByText("ASPA test event")[0]).toBeInTheDocument();

    // Mobile
    global.innerWidth = 393;
    global.dispatchEvent(new Event("resize"));
    rerender(
      <EventTitle
        event={{
          title: "ASPA test event",
          year: 2024,
          month: "November",
          day: "15th",
          location: "ASPA Headquarters",
          photos: [
            {
              id: 1,
              src: "/aspa_logo.svg",
              alt: "ASPA Logo",
            },
          ],
        }}
      />,
    );
    expect(screen.getAllByText("ASPA test event")[0]).toBeInTheDocument();
  });
});
