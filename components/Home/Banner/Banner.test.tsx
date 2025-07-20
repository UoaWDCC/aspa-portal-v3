import { render, screen } from "@/test-utils";
import { Banner } from "./Banner";

describe("Banner component", () => {
  it("renders correctly", () => {
    render(
      <Banner
        title="ASPA - Auckland Student Pool Association"
        description="ASPA Home: View ASPA Landing Page"
        buttonText="View ASPA Landing Page"
        groupText="View ASPA Landing Page"
        titleImageSrc="/aspa_title.svg"
        titleImageAlt="ASPA Title"
      />,
    );
    expect(
      screen.getByText("ASPA - Auckland Student Pool Association"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("ASPA Home: View ASPA Landing Page"),
    ).toBeInTheDocument();
  });
});
