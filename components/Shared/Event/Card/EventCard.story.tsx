import { Meta, StoryObj } from '@storybook/react';
import { EventCard } from './EventCard';

const meta: Meta<typeof EventCard> = {
    title: 'Shared/Event/Card',
    component: EventCard,
    argTypes: {
        event: { control: 'object' },
    }
};

export default meta;

export const Default: StoryObj<typeof EventCard> = {
    args: {
      event: {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageUrl: '/event_example.svg'
      }

    }
  };
