import { Meta, StoryObj } from '@storybook/react';
import { RankBalls } from './RankBalls';

const meta: Meta<typeof RankBalls> = {
    title: 'Ranks/RankBalls',
    component: RankBalls,
    argTypes: {
        data: { control: 'object' },
    }
};

export default meta;

export const Default: StoryObj<typeof RankBalls> = {
    args: {
        data: [
            {
              colour: '#D9D9D9',
              rank: 0,
            },
            {
              colour:'#C5B460',
              rank: 1,
            },
            {
              colour:'#3E76B4',
              rank: 2,
            },
            {
              colour:'#658A66',
              rank: 3,
            },
            {
              colour:'#A65656',
              rank: 4,
            },
            {
              colour:'#222629',
              rank: 5,
            },
        ],
    },
};

