import { render, screen } from '@/test-utils';
import { PastEvent } from './PastEvent';

// REMINDER: Make another test for 1 event and/or 3 events
describe('Default test for past event carousel', () => {
  const ExampleEvent : PastEvent = {
    events: [
      {
        eventName: 'Pool Night 1',
        eventDescription: 'Enjoy a night of pure pool goodness at the Orange Club. $9 entry. Our execs will be there feel free to come say hi!',
        imgUrl: '/event_example.svg'
      },
      {
        eventName: 'Pool Night 2',
        eventDescription: 'Enjoy a night of pure pool goodness at the Orange Club. $9 entry. Our execs will be there feel free to come say hi!',
        imgUrl: '/event_example.svg'
      },
      {
        eventName: 'Pool Night 3',
        eventDescription: 'Enjoy a night of pure pool goodness at the Orange Club. $9 entry. Our execs will be there feel free to come say hi!',
        imgUrl: '/event_example.svg'
      },
      {
        eventName: 'Pool Night 4',
        eventDescription: 'Enjoy a night of pure pool goodness at the Orange Club. $9 entry. Our execs will be there feel free to come say hi!',
        imgUrl: '/event_example.svg'
      },
      {
        eventName: 'Pool Night 5',
        eventDescription: 'Enjoy a night of pure pool goodness at the Orange Club. $9 entry. Our execs will be there feel free to come say hi!',
        imgUrl: '/event_example.svg'
      },
      {
        eventName: 'Pool Night 6',
        eventDescription: 'Enjoy a night of pure pool goodness at the Orange Club. $9 entry. Our execs will be there feel free to come say hi!',
        imgUrl: '/event_example.svg'
      },
    ]
  }
  it('renders correctly', () => {
    render(
      <PastEvent
        events = {ExampleEvent.events}
        // Unsure if 3 cards should always be shown
      />
    );
    ExampleEvent.events.forEach(event => {
      expect(screen.getByText("Past Events")).toBeInTheDocument();
    });
  });
});