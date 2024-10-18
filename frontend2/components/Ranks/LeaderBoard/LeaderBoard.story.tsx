import { Meta, StoryObj } from '@storybook/react';
import { LeaderBoard } from './LeaderBoard';

const meta: Meta<typeof LeaderBoard> = {
    title: 'Ranks/LeaderBoard',
    component: LeaderBoard,
    argTypes: {
        members: { control: 'object' },
    }
};

export default meta;

export const Default: StoryObj<typeof LeaderBoard> = {
    args: {
        members: [
            {
                  memberRank: 1,
                  memberName: 'Person 1',
                  memberSoloWins: 14,
                  memberDuosWins: 1,
                  memberTotalScore: 150
            },
            {
                  memberRank: 2,
                  memberName: 'Person 12',
                  memberSoloWins: 12,
                  memberDuosWins: 2,
                  memberTotalScore: 140
            },
            {
                  memberRank: 3,
                  memberName: 'Person 51',
                  memberSoloWins: 12,
                  memberDuosWins: 0,
                  memberTotalScore: 120
            },
            {
                  memberRank: 4,
                  memberName: 'Person 17',
                  memberSoloWins: 10,
                  memberDuosWins: 2,
                  memberTotalScore: 120
            },
            {
                  memberRank: 5,
                  memberName: 'Person 7',
                  memberSoloWins: 10,
                  memberDuosWins: 1,
                  memberTotalScore: 110
            },
        
          ]
    }
};

