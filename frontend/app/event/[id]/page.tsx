"use client";
import { useRouter, useParams } from 'next/navigation';
import HiEventsWidget from '@/components/HiEvents/HiEventsWidget';

const EventPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  return (
    <div style={{ marginTop: '200px' }}>
      <HiEventsWidget eventId={id} />
    </div>
  );
};

export default EventPage;