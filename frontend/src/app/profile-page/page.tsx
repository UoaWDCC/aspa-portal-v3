import ProfileForm from "../../ui/profile-page/ProfileCard"
import UpcomingEvents from "../../ui/profile-page/UpcomingEvents"
import ParticipatedEvents from "../../ui/profile-page/ParticipatedEvents"


export default function Home() {
  return (
    <div>
      <ProfileForm/>
      <UpcomingEvents/>
      <ParticipatedEvents/>
    </div>
  );
}