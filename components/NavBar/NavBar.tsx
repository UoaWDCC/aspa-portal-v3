import { useState } from "react";
import {
  AppShell,
  Group,
  Burger,
  UnstyledButton,
  NavLink,
  FloatingIndicator,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { IconX } from "@tabler/icons-react";
import Image from "next/image";

interface Link {
  name: string;
  href: string;
}

interface NavBarProps {
  links: Link[];
}

export function NavBar({ links }: NavBarProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const controls = links.map((link, index) => (
    <Link key={index} href={link.href} passHref>
      <UnstyledButton
        key={index}
        className={styles.control}
        onClick={() => handleClick(index)}
        ref={setControlRef(index)}
        mod={{ active: active === index }}
      >
        <div
          className={`${styles.controlName} ${
            index === active ? styles.hidden : ""
          }`}
        >
          {link.name}
        </div>
      </UnstyledButton>
    </Link>
  ));


  const [rotation, setRotation] = useState(0);

  const handleClick = (index: number) => {
    const delta = Math.abs(index - active);
    setRotation((prev) => prev + 360 * delta);
    setActive(index);
  };

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
        <Group h="100%" px="md" justify="space-between" style={{ width: "100%" }}>
          <Link href="/" passHref legacyBehavior>
            <a onClick={() => handleClick(0)}>
              <Image
                src="/aspa_logo.png"
                alt="ASPA Logo"
                width={37}
                height={37}
                className={styles.logoCircle}
              />
            </a>
          </Link>

          {/* Right side: burger (mobile) + nav links (desktop) */}
          <Group gap="md" align="center">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              aria-label="Toggle menu"
            />
            <Group visibleFrom="sm" gap={20}>
              <div className={styles.root} ref={setRootRef}>
                {controls}
              <FloatingIndicator
                target={controlsRefs[active]}
                parent={rootRef}
                transitionDuration={400}
              >
                <div
                  className={styles.indicator}
                  style={{ "--rotation": `${rotation}deg` } as React.CSSProperties}
                >
                  8
                </div>
              </FloatingIndicator>
            </div>
          </Group>
        </Group>
        </Group>
      </AppShell.Header>

      {/* Mobile Drawer Navigation */}
      <Drawer
        opened={opened}
        onClose={toggle}
        padding="md"
        size="100%" // Full screen on mobile
        withCloseButton={false}
        hiddenFrom="sm"
        position="right"
        zIndex={1001}
      >
        <Group justify="flex-end" mb="xl">
          <UnstyledButton onClick={toggle}>
            <IconX size={24} />
          </UnstyledButton>
        </Group>

        <Stack gap="md">
          {links.map((link, index) => (
            <NavLink
              key={index}
              label={link.name}
              component={Link}
              href={link.href}
              active={index === active}
              onClick={() => {
                handleClick(index);
                toggle(); // Close the drawer
              }}
            />
          ))}
        </Stack>
      </Drawer>


      <AppShell.Navbar py="md" px={4}>
        {links.map((link, index) => (
          <NavLink
            key={index}
            label={link.name}
            href={link.href}
            active={index === active}
            onClick={() => handleClick(index)}
          />
        ))}
      </AppShell.Navbar>
    </AppShell>
  );
}
