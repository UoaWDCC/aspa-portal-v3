import { render, screen } from '@/test-utils';
import { PastEvent } from './PastEvent';

describe('Banner component', () => {
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
      />
    );
    ExampleEvent.events.forEach(event => {
      expect(screen.getByText(event.eventName)).toBeInTheDocument();
    });
  });
});