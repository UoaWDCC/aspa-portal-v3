import ProfileForm from "../../ui/profile-page/ProfileCard"
import UpcomingEvents from "../../ui/profile-page/UpcomingEvents"
import ParticipatedEvents from "../../ui/profile-page/ParticipatedEvents"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASPA - Profile Page",
  description: "ASPA Profile Page: View and manage your ASPA profile, update personal information, find about upcoming events as well as your articipated events",
};

export default function Home() {
  return (
    <div>
      <ProfileForm />
      <UpcomingEvents />
      <ParticipatedEvents />
    </div>
  );
}