'use client';
import { useEffect, useState } from 'react';
import { Blockquote } from '@mantine/core';
import { IconInfoCircle, IconSportBillard } from '@tabler/icons-react';
import styles from './TestimonialCard.module.css';

export interface Testimonial {
    quote: string;
    author: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    delay?: number;
    color?: string;
}

export function TestimonialCard(
    { testimonial, 
        delay = 1000,
        color = '#d78840' 
    }: TestimonialCardProps
) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);
    const icon = <IconSportBillard />;
    return (
        <Blockquote
            cite={testimonial.author}
            className={`${styles.blockquote} ${visible ? styles.visible : ''}`}
            radius={30}
            color={color}
            icon={icon}
        >
            {testimonial.quote}
        </Blockquote>
    );
}