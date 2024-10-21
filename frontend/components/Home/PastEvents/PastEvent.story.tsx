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
                eventName: 'Lorem ipsum',
                eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imgUrl: '/event_example.svg'
            },
            {
                eventName: 'Lorem ipsum',
                eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imgUrl: '/event_example.svg'
            },
            {
                eventName: 'Lorem ipsum',
                eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imgUrl: '/event_example.svg'
            },
            {
                eventName: 'Lorem ipsum',
                eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imgUrl: '/event_example.svg'
            },
            {
                eventName: 'Lorem ipsum',
                eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imgUrl: '/event_example.svg'
            },
            {
                eventName: 'Lorem ipsum',
                eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imgUrl: '/event_example.svg'
            },

        ]
    }
};

