import { render, screen } from '@/test-utils';
import { TestimonialGroup } from './TestimonialGroup';
import { Testimonial } from "../Card/TestimonialCard";

describe('Testing a testimonial group', () => {
  const ExampleTestimonials: Testimonial[] = [
      {
        quote: 'Pool is such a cool game OMG.',
        author: 'ASPA Member 1',
      },
      {
        quote: 'Pool is such a cool game OMG.',
        author: 'ASPA Member 2',
      },
      {
        quote: 'Pool is such a cool game OMG.',
        author: 'ASPA Member 3',
      },
    ]

  it('renders correctly', () => {
    render(
      <TestimonialGroup
        testimonials={ExampleTestimonials}
      />
    );
    expect(screen.getByText(ExampleTestimonials[0].quote)).toBeInTheDocument();
    expect(screen.getByText(ExampleTestimonials[0].author)).toBeInTheDocument();
    expect(screen.getByText(ExampleTestimonials[1].quote)).toBeInTheDocument();
    expect(screen.getByText(ExampleTestimonials[1].author)).toBeInTheDocument();
    expect(screen.getByText(ExampleTestimonials[2].quote)).toBeInTheDocument();
    expect(screen.getByText(ExampleTestimonials[2].author)).toBeInTheDocument();
  });
});