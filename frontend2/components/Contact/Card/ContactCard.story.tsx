import { Meta, StoryObj } from '@storybook/react';
import { ContactCard } from './ContactCard';

const meta: Meta<typeof ContactCard> = {
    title: 'Contact/Card',
    component: ContactCard,
    argTypes: {
        executive: { control: 'object' },
    }
};

export default meta;

export const Default: StoryObj<typeof ContactCard> = {
    args: {
      executive: {
        executiveName: 'Lorem ipsum',
        executiveTitle: 'Lorem ipsum',
        executiveBlurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgUrl: '/event_example.svg'
      },
      badgeColor: "#d78840"
    }
  };