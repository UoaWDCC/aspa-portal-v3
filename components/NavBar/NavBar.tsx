import { useState, useRef } from "react";
import {
  AppShell,
  Group,
  Burger,
  UnstyledButton,
  NavLink,
  FloatingIndicator,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import styles from "./NavBar.module.css";

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

  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);

  function getControlButton(index: number): HTMLElement | null {
    if (!rootRef) return null;
    return rootRef.querySelector(`[data-control-index="${index}"]`);
  };

  const controls = links.map((link, index) => (
    <Link key={index} href={link.href} passHref legacyBehavior>
      <UnstyledButton
        key={index}
        className={styles.control}
        onClick={() => setActive(index)}
        data-control-index={index}
        mod={{ active: active === index }}
      >
        <div
          className={`${styles.controlName} ${index === active ? styles.hidden : ""}`}
        >
          {link.name}
        </div>
      </UnstyledButton>
    </Link>
  ));

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className={styles.header}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group
            justify="space-between"
            style={{ flex: 1, justifyContent: "flex-end" }}
          >
            <Group ml="xl" gap={20} visibleFrom="sm">
              <div className={styles.root} ref={setRootRef}>
                {controls}
                <FloatingIndicator
                  target={getControlButton(active)}
                  parent={rootRef}
                  className={styles.indicator}
                />
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
