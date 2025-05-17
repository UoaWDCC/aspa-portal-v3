import { Meta, StoryObj } from '@storybook/react';
import { PastEvent } from './PastEvent';

const meta: Meta<typeof PastEvent> = {
    title: 'Home/PastEvents',
    component: PastEvent,
    argTypes: {
        events: { control: 'object' },
    }
};

export default meta;

export const Default: StoryObj<typeof PastEvent> = {
    args: {
        events: [
            {
                name: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imageUrl: '/event_example.svg'
            },
            {
                name: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imageUrl: '/event_example.svg'
            },
            {
                name: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imageUrl: '/event_example.svg'
            },
            {
                name: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imageUrl: '/event_example.svg'
            },
            {
                name: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imageUrl: '/event_example.svg'
            },
            {
                name: 'Lorem ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imageUrl: '/event_example.svg'
            },

        ]
    }
};

