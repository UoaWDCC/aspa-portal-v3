import { render, screen } from "@/test-utils";
import { Banner } from "./Banner";

describe('Banner Component Testing', () => {
  const originalInnerWidth = global.innerWidth;

  beforeEach(() => {
    global.innerWidth = 1280;
    global.dispatchEvent(new Event('resize'));
  })

  it("Large banner, No resize", () => {
    const title = "ASPA - Auckland Student Pool Association of the University of Auckland, New Zealand, Waipapa Taumata Rau";
    const description = "Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur";
    const buttonText = "View Auckland Student Pool Association of the the University of Auckland Page";
    const groupText = "Button to view the Auckland Student Pool Association of the the University of Auckland Page";
    const imageAlt = "ASPA Title";
    render(
        <Banner title={title}
          description={description}
          buttonText={buttonText}
          groupText={groupText}
          titleImageSrc="/aspa_title.svg"
          titleImageAlt={imageAlt}
        />
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(buttonText)).toBeInTheDocument();
    expect(screen.getByText(groupText)).toBeInTheDocument();
    const img = screen.getByAltText(imageAlt);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/aspa_title.svg");
  })

  it("Default banner, mobile screen" , () => {
    global.innerWidth = 375;
    global.dispatchEvent(new Event('resize'));

    const title = "ASPA - Auckland Student Pool Association";
    const description = "Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet";
    const buttonText = "View ASPA Page";
    const groupText = "View ASPA Page";
    const imageAlt = "ASPA Title";
    render(
        <Banner title={title}
          description={description}
          buttonText={buttonText}
          groupText={groupText}
          titleImageSrc="/aspa_title.svg"
          titleImageAlt={imageAlt}
        />
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(buttonText)).toBeInTheDocument();
    expect(screen.getByText(groupText)).toBeInTheDocument();
    const img = screen.getByAltText(imageAlt);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/aspa_title.svg");
  });
  
  it("Snapshot test for default banner", () => {
    const title = "ASPA - Auckland Student Pool Association";
    const description = "Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet";
    const buttonText = "View ASPA Page";
    const groupText = "View ASPA Page";
    const imageAlt = "ASPA Title";
    const { asFragment } = render(
      <Banner 
          title={title}
          description={description}
          buttonText={buttonText}
          groupText={groupText}
          titleImageSrc="/aspa_title.svg"
          titleImageAlt={imageAlt}
        />
    );
    expect(asFragment()).toMatchSnapshot();
  });
})
