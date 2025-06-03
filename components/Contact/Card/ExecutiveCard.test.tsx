import { render, screen } from "@/test-utils";
import { ExecutiveCard } from "./ExecutiveCard";
import type { Executive } from "./ExecutiveCard";

// Exec card currently has no image, so test for it has not been included

describe("ExecutiveCard Component Testing", () => {
  const originalInnerWidth = global.innerWidth;
  const executive: Executive = {
    name: "Johnny Shen",
    title: "President",
    description: "Your friendly neighbourhood President of ASPA",
  };

  beforeEach(() => {
    global.innerWidth = originalInnerWidth;
    global.dispatchEvent(new Event('resize'));
  })

  it("should render the whole card properly", () => {
    render(
        <ExecutiveCard 
            executive={executive} 
        />
    );
    expect(screen.getByText(executive.name)).toBeInTheDocument();
    expect(screen.getByText(executive.title)).toBeInTheDocument();
    expect(screen.getByText(executive.description)).toBeInTheDocument();

    const img = screen.getByAltText(executive.name);
    expect(img).toBeInTheDocument();
    expect(img.tagName.toLowerCase()).toBe("img");
  });

  it("should resize to fit mobile views after starting in desktop view" , () => {
      const { rerender } = render(<ExecutiveCard executive={executive} />);
  
      expect(screen.getByText(executive.name)).toBeInTheDocument();
  
      global.innerWidth = 375;
      global.dispatchEvent(new Event('resize'));
      rerender(<ExecutiveCard executive={executive} />);
  
      expect(screen.getByText(executive.name)).toBeInTheDocument();
      const img = screen.getByAltText(executive.name);
      expect(img).toBeInTheDocument();
      expect(img.tagName.toLowerCase()).toBe("img");
    });

  it("matches snapshot", () => {
    const { asFragment } = render(<ExecutiveCard executive={executive} />);
    expect(asFragment()).toMatchSnapshot();
  });
});