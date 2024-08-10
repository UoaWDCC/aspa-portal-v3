import EventPage from "@/ui/events/admin/EventPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ASPA - Admin Dashboard",
    description: "ASPA Events: View All the Event ASPA has to offer",
};

export default function AdminEvents() {
    return (
        <>
            <EventPage />

        </>

    );
}