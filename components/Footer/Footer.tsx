import { AppShell, Group, UnstyledButton, Anchor, Stack } from "@mantine/core";
import Image from "next/image";
import styles from "./Footer.module.css";

interface SocialMediaLink {
  name: string;
  icon: string;
  href: string;
}

interface Page {
  title: string;
  route: string;
}

interface FooterProps {
  socialMediaLinks: SocialMediaLink[];
  footerBg?: string;
  socialMediaImageWidth?: number;
  socialMediaImageHeight?: number;
  pages: Page[];
}

export function Footer({
  socialMediaLinks,
  footerBg = "#717882",
  socialMediaImageWidth = 40,
  socialMediaImageHeight = 40,
  pages,
}: FooterProps) {
  return (
    <AppShell>
      <AppShell.Footer className={styles.footer} style={{ backgroundColor: footerBg }}>
        <div className={styles.footerRow}>
          <div className={styles.logoContainer}>
            <Image
              src="/aspa_logo.png"
              alt="ASPA Logo"
              width={48}
              height={48}
              className={styles.image}
            />
          </div>
          <div className={styles.centerLinks}>
            {pages.map((page, index) => (
              <Anchor key={index} href={page.route} className={styles.link}>
                {page.title}
              </Anchor>
            ))}
          </div>
          <div className={styles.socialLinks}>
            {socialMediaLinks.map((link, index) => (
              <UnstyledButton
                key={index}
                onClick={() => window.open(link.href, "_blank")}
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
                className={styles.socialMediaButton}
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={socialMediaImageWidth}
                  height={socialMediaImageHeight}
                  className={styles.image}
                />
              </UnstyledButton>
            ))}
          </div>
        </div>
      </AppShell.Footer>
    </AppShell>
  );
}
