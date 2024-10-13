import { render, screen } from '@/test-utils';
import { NavBar } from './NavBar';

type Link = {
  name: string;
  href: string;
}

describe('Navbar (1 Link)', () => {
  const ExampleLinks : Link[] = [
    {
      name: "Link 1",
      href: "Link 1"
    }
  ]
  it('renders correctly', () => {
    render(
      <NavBar
        links={ExampleLinks}
      />
    );
    // Check that the link is not displayed and should be behind the pool ball
    expect(screen.getByText(ExampleLinks[0].name)).toBeNull();
  });
});

describe('Navbar (A lot of Links)', () => {
  const ExampleLinks : Link[] = [
    {
      name: "Link 1",
      href: "Link 1"
    },
    {
      name: "Link 2",
      href: "Link 2"
    },
    {
      name: "Link 3",
      href: "Link 3"
    },
    {
      name: "Link 4",
      href: "Link 4"
    },
    {
      name: "Link 5",
      href: "Link 5"
    },
    {
      name: "Link 6",
      href: "Link 6"
    },
    {
      name: "Link 7",
      href: "Link 7"
    }
  ]
  it('renders correctly', () => {
    render(
      <NavBar
        links={ExampleLinks}
      />
    );
    // Check that the set of links is displayed except first which should be behind pool ball
    expect(screen.getByText(ExampleLinks[1].name)).toBeInTheDocument();
    expect(screen.getByText(ExampleLinks[2].name)).toBeInTheDocument();
    expect(screen.getByText(ExampleLinks[3].name)).toBeInTheDocument();
    expect(screen.getByText(ExampleLinks[4].name)).toBeInTheDocument();
    expect(screen.getByText(ExampleLinks[5].name)).toBeInTheDocument();
    expect(screen.getByText(ExampleLinks[6].name)).toBeInTheDocument();
  });
});

describe('Navbar (Short Link)', () => {
  const ExampleLinks : Link[] = [
    {
      name: "Link 1",
      href: "Link 1"
    },
    {
      name: "O",
      href: "O"
    },
    {
      name: "Click this link to go to the homepage otherwise click another link to go to the corresponding page",
      href: "Link"
    }
  ]
  it('renders correctly', () => {
    render(
      <NavBar
        links={ExampleLinks}
      />
    );
    // Check that the set of links is displayed except the first which should be behind the pool ball
    expect(screen.getByText(ExampleLinks[1].name)).toBeInTheDocument();
    expect(screen.getByText(ExampleLinks[2].name)).toBeInTheDocument();
  });
});