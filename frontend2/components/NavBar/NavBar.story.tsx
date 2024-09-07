import { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

const links = [
    { name: 'Home', href: '/home' },
    { name: 'Contact', href: '/contact' },
    { name: 'Events', href: '/events' },
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