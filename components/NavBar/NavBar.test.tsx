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

  it("highlights the active link when clicked", () => {
    render(<NavBar links={links} />);
    const homeButton = screen.getAllByText("Home")[0];
    fireEvent.click(homeButton);
    // The FloatingIndicator should move, but we can check aria-label or data-active
    expect(homeButton.closest("button")).toHaveAttribute("data-active");
  });

  it("shows the burger menu on mobile and toggles navbar", () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));
    render(<NavBar links={links} />);
    const burger = screen.getByRole("button", { name: ""});
    expect(burger).toBeInTheDocument();
    fireEvent.click(burger);
    // After clicking, the navbar should be visible (NavLink should be in the document)
    expect(screen.getAllByText("Home")[0]).toBeInTheDocument();
  });

  it("renders correctly on desktop and mobile", () => {
    // Desktop
    global.innerWidth = 1200;
    global.dispatchEvent(new Event("resize"));
    const { rerender } = render(<NavBar links={links} />);
    expect(screen.getAllByText("Home")[0]).toBeInTheDocument();

    // Mobile
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