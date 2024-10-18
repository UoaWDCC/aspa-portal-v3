import { Meta, StoryObj } from '@storybook/react';
import { MemberCard } from './MemberCard';

const meta: Meta<typeof MemberCard> = {
    title: 'Ranks/MemberCard',
    component: MemberCard,
    argTypes: {
        member: { control: 'object' },
    }
};

export default meta;

export const Default: StoryObj<typeof MemberCard> = {
    args: {
      member: {
        memberRank: 1,
        memberName: 'Lorem ipsum',
        memberSoloWins: 2,
        memberDuosWins: 3,
        memberTotalScore: 4,
      },
      badgeColor: "#d78840"
    }
  };