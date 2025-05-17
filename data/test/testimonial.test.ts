import { getTestimonials } from '../service/testimonial';
import { createDirectus, rest, readItems } from '@directus/sdk';
import { TestimonialSchema } from '../types/testimonial';
import { URL } from '../config';

// Mock the Directus client
jest.mock('@directus/sdk', () => ({
  createDirectus: jest.fn(() => ({
    with: jest.fn().mockReturnThis(),
    request: jest.fn(),
  })),
  rest: jest.fn(),
  readItems: jest.fn(),
}));

describe('getTestimonials', () => {
  it('should fetch testimonials', async () => {
    const mockTestimonials = [
      { quote: 'Test quote 1', author: 'Author 1' },
      { quote: 'Test quote 2', author: 'Author 2' },
    ];

    // Mock the request method to return the mock testimonials
    (createDirectus(URL).with(rest()).request as jest.Mock).mockResolvedValue(mockTestimonials);

    // Mock the readItems function to return the mock testimonials
    (readItems as jest.Mock).mockReturnValue(mockTestimonials);

    const testimonials = await getTestimonials();

    expect(testimonials).toEqual(mockTestimonials);
    expect(createDirectus).toHaveBeenCalledWith(URL);
    expect(rest).toHaveBeenCalled();
    expect(readItems).toHaveBeenCalledWith('testimonials', { fields: ['quote', 'author'] });
  });
});