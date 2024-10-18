import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem, px } from '@mantine/core';
import classes from './RankBalls.module.css';

interface BallProps {
  colour: string;
  rank: number;
}

function Ball({ colour, rank }: BallProps) {
  return (
    <Paper
      shadow='None'
      style={{ backgroundColor: 'transparent' }}
    >
        <div 
        className={classes.ballContainer}
        >
            <div
            className={classes.ball}
            style={{ backgroundColor: colour }}
            >
            </div>
            <Text 
            className={classes.rank} 
            size="xs"
            >
                Rank {rank}
            </Text>
            <Button 
            className={classes.button}
            >
                Leaderboard
            </Button>
        </div>
    </Paper>
  );
}

const data = [
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
];

export function RankBalls() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data
    .filter((item): item is BallProps => item.colour !== undefined && item.rank !== undefined)
    .map((item) => (
    <Carousel.Slide key={item.rank}>
      <Ball {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '6' }}
      slideGap="0"
      align="center"
      slidesToScroll={mobile ? 2 : 0}
      style={{ backgroundColor: '#87562A', borderRadius: '3rem', padding: "2rem" }}
    >
      {slides}
    </Carousel>
  );
}