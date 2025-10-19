import { render, screen } from "@testing-library/react";
import TextMarquee from "./TextMarquee";

describe("TextMarquee", () => {
  it("renders without crashing", () => {
    render(
      <TextMarquee
        text="Hello ASPA!"
        bgColor="bg-dark"
        textBg="bg-primary"
        textColor="text-white"
      />,
    );
    expect(screen.getAllByText("Hello ASPA!").length).toBeGreaterThan(0);
  });

  it("renders the provided text multiple times", () => {
    render(
      <TextMarquee
        text="Scrolling Text"
        bgColor="bg-secondary"
        textBg="bg-dark"
        textColor="text-white"
      />,
    );
    // We repeated it 20 times in the component
    const items = screen.getAllByText("Scrolling Text");
    expect(items.length).toBeGreaterThanOrEqual(20);
  });

  it("applies background and text color classes correctly", () => {
    render(
      <TextMarquee
        text="Styled Text"
        bgColor="bg-primary"
        textBg="bg-secondary"
        textColor="text-black"
      />,
    );

    const item = screen.getAllByText("Styled Text")[0].parentElement;
    expect(item).toHaveClass("bg-secondary");
    expect(item).toHaveClass("text-black");
  });

  it("applies wrapperClassName when provided", () => {
    render(
      <TextMarquee
        text="Wrapped"
        bgColor="bg-primary"
        textBg="bg-secondary"
        textColor="text-white"
        wrapperClassName="custom-wrapper"
      />,
    );

    const wrapper = screen.getByText("Wrapped").closest("div")?.parentElement;
    expect(wrapper).toHaveClass("custom-wrapper");
  });
});
