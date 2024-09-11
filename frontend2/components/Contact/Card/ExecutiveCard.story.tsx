import { Meta, StoryObj } from '@storybook/react';
import { ExecutiveCard } from './ExecutiveCard';

const meta: Meta<typeof ExecutiveCard> = {
    title: 'Contact/Card',
    component: ExecutiveCard,
    argTypes: {
        executive: { control: 'object' },
    }
};

export default meta;

export const Default: StoryObj<typeof ExecutiveCard> = {
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