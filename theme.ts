'use client';

import { createTheme } from '@mantine/core';
import { Nova_Square, Josefin_Sans } from 'next/font/google';

export const novaSquare = Nova_Square({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
});

export const josefinSans = Josefin_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
});

export const theme = createTheme({
  colors: {
    'aspa-white': [
      '#ebebeb',
      '#f8f8ff',
      '#dcdcdc',
      '#f3f3f3',
      '#e5e4e2',
      '#e5e5e5',
      '#d3d3d3',
      '#f0ffff',
      '#f1f1f1',
      '#ececec',
    ],
    'aspa-grey': [
      '#717882',
      '#708090',
      '#778899',
      '#91a3b0',
      '#4c516d',
      '#8c92ac',
      '#6e7f80',
      '#7c7f85',
      '#636b79',
      '#74828f',
    ],
    'aspa-black': [
      '#1a1a1a',
      '#343434',
      '#353839',
      '#264040',
      '#1b1b1b',
      '#211f1f',
      '#1e1e1e',
      '#2d2d2d',
      '#2a3439',
      '#2d383a',
    ],
  },

  fontFamily: josefinSans.style.fontFamily,

  headings: {
    fontFamily: novaSquare.style.fontFamily,
    sizes: {
      h1: { fontSize: '48.8px' },
      h2: { fontSize: '39.1px' },
      h3: { fontSize: '31.3px' },
      h4: { fontSize: '25px' },
      h5: { fontSize: '20px' },
    },
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
  },

  other: {
    containerMaxWidth: '1280px',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
});
