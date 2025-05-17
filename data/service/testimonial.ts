import { createDirectus, rest, readItems } from '@directus/sdk';
import { TestimonialResponse, TestimonialSchema } from '../types/testimonial';
import { URL } from '../config';
import { get } from 'http';

const client = createDirectus<TestimonialSchema>(URL).with(rest());

export async function getTestimonials(): Promise<TestimonialResponse[]> {
    const testimonials = await client.request(
        readItems('Testimonials',
            {
                fields: ['quote', 'author'],
                filter: {
                    status: { _eq: 'published' }
                },
            })
    );

    return testimonials
}

