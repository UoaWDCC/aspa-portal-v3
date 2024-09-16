import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  AppShell,
  Burger,
  FloatingIndicator,
  Group,
  NavLink,
  Stack,
  Stepper,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styles from './NavBar.module.css';

interface Link {
  name: string;
  href: string;
}

interface NavBarProps {
  links: Link[];
}

export function NavBar({ links }: NavBarProps) {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);

  const [previousActive, setPreviousActive] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (active !== previousActive) {
      const direction = active - previousActive;
      setRotation(rotation + 90 * direction);
      setPreviousActive(active);
    }
  }, [active, previousActive, rotation]);

  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const controls = links.map((link, index) => (
    <Link key={index} href={link.href} passHref legacyBehavior>
      <UnstyledButton
        key={index}
        className={styles.control}
        onClick={() => setActive(index)}
        ref={setControlRef(index)}
        mod={{ active: active === index }}
      >
        <div className={`${styles.controlName} ${index === active ? styles.hidden : ''}`}>
          {link.name}
        </div>
      </UnstyledButton>
    </Link>
  ));

  return (
    <AppShell
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header className={styles.header}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Group ml="xl" gap={20} visibleFrom="sm">
              <div className={styles.root} ref={setRootRef}>
                {controls}{' '}
                <div
                  className={styles.ball}
                  style={{
                    left: `${active * 20}vh`,
                    transform: `rotate(${rotation}deg)`,
                  }}
                ></div>
              </div>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        {links.map((link, index) => (
          <NavLink
            key={index}
            label={link.name}
            href={link.href}
            active={index === active}
            onClick={() => setActive(index)}
          />
        ))}
      </AppShell.Navbar>
    </AppShell>
  );
}
