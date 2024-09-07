import { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

const links = [
    { name: 'Home', icon: '/home.svg', href: '/home' },
    { name: 'Contact', icon: '/contact_us.svg', href: '/contact' },
    { name: 'Events', icon: '/event.svg', href: '/events' },
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