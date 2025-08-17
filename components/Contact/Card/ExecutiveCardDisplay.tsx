'use client';
import { useState, KeyboardEvent } from 'react';
import { Image, Text, Box } from '@mantine/core';
import styles from './ExecutiveCardDisplay.module.css';

export interface Executive {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  backContent: string; // new field for back side content
}

export interface ExecutiveCardProps {
  executive: Executive;
}

export function ExecutiveCard({ executive }: ExecutiveCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleFlip();
    }
  };

  return (
    <div
      className={styles.cardContainer}
      onClick={handleFlip}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className={`${styles.card} ${flipped ? styles.flipped : ''}`}>
        <div className={styles.cardFront}>
          <Box p="md" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Image
              src={executive.imageUrl}
              alt={executive.name}
              width={120}
              height={120}
              radius="md"
            />
            <Box>
              <Text fw={700} size="lg">
                {executive.name}
              </Text>
              <Text className={styles.positionText} size="sm" mb={4}>
                {executive.title}
              </Text>
              <Text size="sm">{executive.description}</Text>
            </Box>
          </Box>
        </div>
        <div className={styles.cardBack}>
          <Box
            p="md"
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text size="sm">{executive.backContent}</Text>
          </Box>
        </div>
      </div>
    </div>
  );
}
