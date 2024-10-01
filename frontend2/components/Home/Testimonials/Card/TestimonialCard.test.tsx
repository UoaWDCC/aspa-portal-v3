import { render, screen } from '@/test-utils';
import { TestimonialCard, Testimonial } from './TestimonialCard';

describe('Testing a long Testimonial Card', () => {
  const placeholderTestimony : Testimonial = {
    quote: `Joining ASPA has been one of the best parts of my university experience. Whether you're a beginner or a seasoned player,
    there's always someone to share a game with and plenty of opportunities to improve your skills. The club’s friendly community 
    and regular events make it easy to meet new people and have a great time. ASPA isn’t just about pool; it’s about connecting with 
    like-minded students who share a passion for the game. I highly recommend it to anyone looking to have fun and learn along the way!`,
    author: 'James Wellington, Senior Coordinator of Student Engagement and Event Management for the Auckland Student Pool Association, and Longstanding Club Member'
  };
  it('renders correctly', () => {
    render(
      <TestimonialCard
        testimonial={placeholderTestimony}
      />
    );
    expect(screen.getByText(placeholderTestimony.quote)).toBeInTheDocument();
    expect(screen.getByText(placeholderTestimony.author)).toBeInTheDocument();
  });
});

describe('Testing a short Testimonial Card', () => {
  const placeholderTestimony : Testimonial = {
    quote: `Was good!`,
    author: 'JT'
  };
  it('renders correctly', () => {
    render(
      <TestimonialCard
        testimonial={placeholderTestimony}
      />
    );
    expect(screen.getByText(placeholderTestimony.quote)).toBeInTheDocument();
    expect(screen.getByText(placeholderTestimony.author)).toBeInTheDocument();
  });
});