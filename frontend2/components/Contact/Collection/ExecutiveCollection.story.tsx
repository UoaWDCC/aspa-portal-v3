import { Meta, StoryObj } from '@storybook/react';
import { ExecutiveCollection } from './ExecutiveCollection';

const meta: Meta<typeof ExecutiveCollection> = {
    title: 'Contact/Collection',
    component: ExecutiveCollection,
    argTypes: {
        executives: { control: 'object' },
    }
};

export default meta;

export const Default: StoryObj<typeof ExecutiveCollection> = {
    args: {
      executives: [
        {
          executiveName: 'Lorem ipsum',
          executiveTitle: 'Lorem ipsum',
          executiveBlurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          imgUrl: '/event_example.svg'
        },
        {
          executiveName: 'Lorem ipsum',
          executiveTitle: 'Lorem ipsum',
          executiveBlurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          imgUrl: '/event_example.svg'
        },
        {
          executiveName: 'Lorem ipsum',
          executiveTitle: 'Lorem ipsum',
          executiveBlurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          imgUrl: '/event_example.svg'
        },
        {
            executiveName: 'Lorem ipsum',
            executiveTitle: 'Lorem ipsum',
            executiveBlurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imgUrl: '/event_example.svg'
        },
        {
            executiveName: 'Lorem ipsum',
            executiveTitle: 'Lorem ipsum',
            executiveBlurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eia pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imgUrl: '/event_example.svg'
        }
      ],
      badgeColor: "#d78840",
      gutter: "md",
      outerPaddingTop: "",
      outerPaddingBottom: "",
      outerPaddingLeft: "",
      outerPaddingRight: "",
      innerPaddingTop: "",
      innerPaddingBottom: "",
      innerPaddingLeft: "",
      innerPaddingRight: ""
    }
  };