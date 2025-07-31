'use client';
import { Title } from '@mantine/core';
import React from 'react';
import styles from './HeaderTitle.module.css';

export interface AnimatedTitleProps {
  text: string;
  className?: string;
  shadowLayers?: number;
  textSize?: string;
}

const shadowArray = [
  '1px 1px 0 #160E03',
  '2px 2px 0 #160E03',
  '3px 3px 0 #160E03',
  '4px 4px 0 #160E03',
  '5px 5px 0 #59390D',
  '6px 6px 0 #59390D',
  '7px 7px 0 #B2731A',
  '8px 8px 0 #B2731A',
  '9px 9px 0 #B2731A',
  '10px 10px 0 #E5A64D',
  '12px 12px 0 #E5A64D',
  '15px 15px 0 #f6c47e',
  '18px 18px 7px #f6c47e',
  '20px 20px 20px rgba(5, 5, 5)',
];

export function HeaderTitle({
  text,
  className,
  shadowLayers,
  textSize = '15vw',
}: AnimatedTitleProps) {
  const shadowStyle: React.CSSProperties =
    shadowLayers !== undefined
      ? {
          textShadow: shadowArray.slice(0, Math.max(0, shadowLayers)).join(', '),
        }
      : {};

  const textStyles: React.CSSProperties = {
    fontSize: textSize,
  };

  return (
    <Title className={`${styles.brandingTitle} ${className || ''}`}>
      <span className={styles.shadowText} style={{ ...shadowStyle, ...textStyles }}>
        {text}
      </span>
      <span className={styles.mainText} style={textStyles}>
        {text}
      </span>
    </Title>
  );
}
