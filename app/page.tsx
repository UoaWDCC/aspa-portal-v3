import { Banner, BannerProps } from "@/components/Home/Banner/Banner";
import { EventsSection } from "@/components/Events/EventsSection";
import TextMarquee from "@/components/Marquees/TextMarquee";
import "@/components/Marquees/TextMarquee.css";

export const dynamic = "force-dynamic";

const ExampleBannerArguments: BannerProps = {
  title: "WELCOME TO",
  subtitle: "Auckland Student Pool Association",
  description:
    "Register to become a member and receive a 10% discount at Orange Club for your own sessions",
};

export default function HomePage() {
  return (
    <>
      <Banner
        {...ExampleBannerArguments}
        paddingTop="8vw"
        paddingleft="8vw"
        paddingRight="8vw"
        paddingBottom="8vw"
      />
      <TextMarquee
        text="UPCOMING EVENTS"
        bgColor="bg-dark"
        textBg="bg-primary"
        textColor="text-white"
      />
      <div style={{ marginTop: "20px", marginBottom: "40px" }}>
        <EventsSection />
      </div>
    </>
  );
}
