import { AppShell, Group, UnstyledButton, Text, Title } from '@mantine/core';
import Image from 'next/image';
import styles from './Footer.module.css';

interface SocialMediaLink {
    name: string;
    icon: string;
    href: string;
}

interface FooterProps {
    socialMediaLinks: SocialMediaLink[];
    footerBg?: string;
    socialMediaImageWidth?: number;
    socialMediaImageHeight?: number;
    socialMediaBg?: string;
}

export function Footer(
    { socialMediaLinks, 
      footerBg = "#474B4F", 
      socialMediaImageWidth = 24, 
      socialMediaImageHeight = 24, 
      socialMediaBg = "#FFFFFF",
    }: FooterProps
) {
    return (
        <AppShell>
            <AppShell.Footer className={styles.footer} style={{ backgroundColor: footerBg }}>
                <div className={styles.content}>
                    <Title order={2} className={styles.title}>Auckland Student Pool Association</Title>
                    <Text className={styles.description}> A community of students who love to play pool</Text>
                    <Group>
                        {socialMediaLinks.map((link, index) => (
                            <UnstyledButton
                                key={index}
                                onClick={() => window.open(link.href, '_blank')}
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                title={link.name}
                                className={styles.socialMediaButton}
                                style={{ backgroundColor: socialMediaBg }}
                            >
                                <Image src={link.icon} alt={link.name} width={socialMediaImageWidth} height={socialMediaImageHeight} />
                            </UnstyledButton>
                        ))}
                    </Group>
                </div>
            </AppShell.Footer>
        </AppShell>
    );
}