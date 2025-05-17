import { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
    title: 'Home/Banner',
    component: Banner,
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        buttonText: { control: 'text' },
        groupText: { control: 'text' },
        titleImageSrc: { control: 'text' },
        titleImageAlt: { control: 'text' }
    }
};

export default meta;


export const Default: StoryObj<typeof Banner> = {
    args: {
      title: 'Welcome to Auckland Student Pool Association!',
      description: 'Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, Leque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur',
      buttonText: 'Current Events',
      groupText: 'dolor sit amet, consectetur',
      titleImageSrc: '/aspa_title.svg',
      titleImageAlt: 'ASPA Title'
    }
  };
