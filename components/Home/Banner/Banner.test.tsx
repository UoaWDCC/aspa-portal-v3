import { render, screen } from "@/test-utils";
import { Banner, BannerProps } from "./Banner";

describe("Banner Component Testing", () => {
  const originalInnerWidth = global.innerWidth;
  const longBannerProps: BannerProps = {
    title:
      "ASPA - Auckland Student Pool Association of the University of Auckland, New Zealand, Waipapa Taumata Rau",
    description:
      "Here you can register to become a member of the club, log in to your account, and sign up for club events. Check out the list of current events to see what we’ve planned for the future, or have a look at our past events to see what we’re all about and some of the highlights of past years.",
    groupText:
      "Button to view the Auckland Student Pool Association of the the University of Auckland Page",
    titleImageSrc: "/aspa_title.svg",
    titleImageAlt: "ASPA Title",
  };
  const bannerProps: BannerProps = {
    title: "ASPA - Auckland Student Pool Association",
    description:
      "Here you can register to become a member of the club, log in to your account, and sign up for club events. Check out the list of current events to see what we’ve planned for the future, or have a look at our past events to see what we’re all about and some of the highlights of past years.",
    groupText: "Click Here To View ASPA Page",
    titleImageSrc: "/aspa_title.svg",
    titleImageAlt: "ASPA Title",
  };

  beforeEach(() => {
    global.innerWidth = originalInnerWidth;
    global.dispatchEvent(new Event("resize"));
  });

  it("should display all fields properly despite length", () => {
    render(<Banner {...longBannerProps} />);
    expect(screen.getByText(longBannerProps.title)).toBeInTheDocument();
    expect(screen.getByText(longBannerProps.description)).toBeInTheDocument();
    expect(screen.getByText(longBannerProps.groupText)).toBeInTheDocument();
    const img = screen.getByAltText(longBannerProps.titleImageAlt);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", longBannerProps.titleImageSrc);
  });

  it("should render the logo image with the moving animation class", () => {
    render(<Banner {...bannerProps} />);
    const img = screen.getByAltText(bannerProps.titleImageAlt);
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass("hoverUpDown");
  });

  it("should resize to fit mobile views after starting in desktop view", () => {
    const { rerender } = render(<Banner {...bannerProps} />);

    expect(screen.getByText(bannerProps.title)).toBeInTheDocument();

    global.innerWidth = 375;
    global.dispatchEvent(new Event("resize"));
    rerender(<Banner {...bannerProps} />);

    expect(screen.getByText(bannerProps.title)).toBeInTheDocument();
    expect(screen.getByText(bannerProps.description)).toBeInTheDocument();
    expect(screen.getByText(bannerProps.groupText)).toBeInTheDocument();
    const img = screen.getByAltText(bannerProps.titleImageAlt);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", bannerProps.titleImageSrc);
  });

  it("should match snapshot", () => {
    const title = "ASPA - Auckland Student Pool Association";
    const description =
      "Here you can register to become a member of the club, log in to your account, and sign up for club events. Check out the list of current events to see what we’ve planned for the future, or have a look at our past events to see what we’re all about and some of the highlights of past years.";
    const groupText = "View ASPA Page";
    const imageAlt = "ASPA Title";
    const { asFragment } = render(
      <Banner
        title={title}
        description={description}
        groupText={groupText}
        titleImageSrc="/aspa_title.svg"
        titleImageAlt={imageAlt}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
