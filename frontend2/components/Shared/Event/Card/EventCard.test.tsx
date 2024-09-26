import { render, screen } from '@/test-utils';
import { EventCard, Event } from './EventCard';

// Test short event name and description
describe('Short Event Name and Description', () => {
  const placeholderEvent : Event = {
    eventName: 'PoolNight',
    eventDescription: 'Pool at Orange',
    imgUrl: '/event_example.svg'
  };
  it('renders correctly', () => {
    render(
      <EventCard
        event={placeholderEvent}
      />
    );
    expect(screen.getByText(placeholderEvent.eventName)).toBeInTheDocument();
    expect(screen.getByText(placeholderEvent.eventDescription)).toBeInTheDocument();
    expect(screen.getByAltText(placeholderEvent.eventName)).toBeInTheDocument();
  });
});


// Test short event name and description
describe('Long Event Name and Description', () => {
  const placeholderEvent : Event = {
    eventName: 'Pool Night on a Wednesday Night, MEMBERS ONLY!!! SUPER EXCLUSIVE, SUPER FUN, SUPER AWESOME',
    eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgUrl: '/event_example.svg'
  };
  it('renders correctly', () => {
    render(
      <EventCard
        event={placeholderEvent}
      />
    );
    expect(screen.getByText(placeholderEvent.eventName)).toBeInTheDocument();
    expect(screen.getByText(placeholderEvent.eventDescription)).toBeInTheDocument();
    expect(screen.getByAltText(placeholderEvent.eventName)).toBeInTheDocument();
  });
});