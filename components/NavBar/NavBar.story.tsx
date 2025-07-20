import { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

const links = [
  { name: 'Home', href: '/home' },
  { name: 'Events', href: '/events' },
  { name: 'ASPA Team', href: '/contact' },
  { name: 'Profile', href: '/contact' },
];

const meta: Meta<typeof NavBar> = {
  title: 'Shared/NavBar',
  component: NavBar,
  argTypes: {},
};

export default meta;

export const Default: StoryObj<typeof NavBar> = {
  args: {
    links,
  },
};
