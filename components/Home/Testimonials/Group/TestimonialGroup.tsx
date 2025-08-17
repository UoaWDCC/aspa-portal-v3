'use client';
import { Container } from '@mantine/core';
import { Testimonial, TestimonialCard } from '../Card/TestimonialCard';

export interface TestimonialGroup {
  testimonials: Testimonial[];
  paddingTop?: string;
  paddingBottom?: string;
  paddingleft?: string;
  paddingRight?: string;
  paddingBetween?: string;
  delay?: number;
  color?: string;
}

export function TestimonialGroup({
  testimonials,
  paddingTop = '',
  paddingBottom = '',
  paddingleft = '',
  paddingRight = '',
  paddingBetween = '',
  delay = 1000,
  color = '#d78840',
}: TestimonialGroup) {
  return (
    <Container fluid pt={paddingTop} pb={paddingBottom} pl={paddingleft} pr={paddingRight}>
      {testimonials.map((testimonial, index) => (
        <Container key={index} pb={paddingBetween}>
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            delay={index * delay}
            color={color}
          />
        </Container>
      ))}
    </Container>
  );
}
