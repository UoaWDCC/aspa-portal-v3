import { Meta, StoryObj } from '@storybook/react';
import { InquiryForm } from './InquiryForm';

const meta: Meta<typeof InquiryForm> = {
  title: 'Contact/InquiryForm',
  component: InquiryForm,
  argTypes: {},
};

export default meta;

export const Default: StoryObj<typeof InquiryForm> = {
  args: {
    paddingTop: 'md',
    paddingBottom: 'md',
    paddingLeft: 'md',
    paddingRight: 'md',
  },
};
