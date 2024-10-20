interface TestimonialRequest {
    quote: string;
    author: string;
    status: string;
} 

export interface TestimonialResponse {
    quote: string;
    author: string;
}

export interface TestimonialSchema {
    Testimonials: TestimonialRequest[];
}

