import { useState } from 'react';
import { AppShell, Group, Burger, UnstyledButton, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
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

    return (
        <AppShell
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header className={styles.header}>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1, justifyContent: 'flex-end'}}>
                        <Group ml="xl" gap={20} visibleFrom="sm">
                            {links.map((link, index) => (
                                <Link key={index} href={link.href} passHref legacyBehavior>
                                    <a className={index === active ? '' : styles.control} onClick={() => setActive(index)}>
                                        <UnstyledButton>
                                            <div className={`${styles.controlName} ${index === active ? styles.hidden : ''}`}>
                                                {link.name}
                                            </div>
                                            
                                            {index === active && <div className={styles.activeLink}></div>}
                                        </UnstyledButton>
                                    </a>
                                </Link>
                            ))}
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