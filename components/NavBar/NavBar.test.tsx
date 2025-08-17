import { render, screen, fireEvent } from "@/test-utils";
import { NavBar } from "./NavBar";

const links = [
  { name: "Home", href: "/home" },
  { name: "Contact", href: "/contact" },
  { name: "Events", href: "/events" },
];

describe("NavBar Component testing", () => {
  const originalInnerWidth = global.innerWidth;

  beforeEach(() => {
    global.innerWidth = originalInnerWidth;
    global.dispatchEvent(new Event("resize"));
  });

  it("should render all navigation links", () => {
    render(<NavBar links={links} />);
    links.forEach((link) => {
      expect(screen.getAllByText(link.name)[0]).toBeInTheDocument();
    });
  });

  it("Link click should work properly", () => {
    render(<NavBar links={links} />);
    const homeButton = screen.getAllByText("Home")[0];
    fireEvent.click(homeButton);
    // The FloatingIndicator should move, but we can check aria-label or data-active
    expect(homeButton.closest("button")).toHaveAttribute("data-active");
  });

  it("should show burger navbar in mobile view", () => {
    global.innerWidth = 375;
    global.dispatchEvent(new Event("resize"));
    render(<NavBar links={links} />);
    const burger = screen.getByRole("button", { name: "Toggle menu" });
    expect(burger).toBeInTheDocument();
    fireEvent.click(burger);
    // After clicking, the navbar should be visible (NavLink should be in the document)
    expect(screen.getAllByText("Home")[0]).toBeInTheDocument();
  });

  it("properly switches between desktop and mobile views", () => {
    const { rerender } = render(<NavBar links={links} />);
    expect(screen.getAllByText("Home")[0]).toBeInTheDocument();

    global.innerWidth = 375;
    global.dispatchEvent(new Event("resize"));
    rerender(<NavBar links={links} />);
    expect(screen.getAllByText("Home")[0]).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<NavBar links={links} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
