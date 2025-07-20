import { AppShell, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import { 
  RiFacebookFill as FacebookFillIcon,
  RiTwitterXFill as TwitterXFillIcon, 
  RiInstagramFill as InstagramFillIcon, 
  RiLinkedinFill as LinkedinFillIcon,
  RiYoutubeFill as YoutubeFillIcon,
  RiDiscordFill as DiscordFillIcon
} from "@remixicon/react";
import styles from "./Footer.module.css";

interface SocialMediaLink {
  name: string;
  icon: string; // This will now be the icon key instead of image path
  href: string;
}

interface FooterProps {
  socialMediaLinks: SocialMediaLink[];
  footerBg?: string;
  iconSize?: number; // Changed from separate width/height to single size
}

// Icon mapping object
const iconMap = {
  facebook: FacebookFillIcon,
  twitter: TwitterXFillIcon,
  instagram: InstagramFillIcon,
  linkedin: LinkedinFillIcon,
  youtube: YoutubeFillIcon,
  discord: DiscordFillIcon,
} as const;

export function Footer({
  socialMediaLinks,
  footerBg = "#717882",
  iconSize = 24, // Standard accessible size
}: FooterProps) {
  return (
    <AppShell>
      <AppShell.Footer
        className={styles.footer}
        style={{ backgroundColor: footerBg }}
      >
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
          <div>
            <></>
          </div>
          <div className={styles.socialLinks}>
            {socialMediaLinks.map((link, index) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap];
              
              if (!IconComponent) {
                console.warn(`Icon "${link.icon}" not found in iconMap`);
                return null;
              }

              return (
                <UnstyledButton
                  key={index}
                  onClick={() => window.open(link.href, "_blank")}
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${link.name} page`}
                  title={`Visit our ${link.name} page`}
                  className={styles.socialMediaButton}
                >
                  <IconComponent 
                    size={iconSize}
                    aria-hidden="true" // Icon is decorative, button has aria-label
                  />
                </UnstyledButton>
              );
            })}
          </div>
        </div>
      </AppShell.Footer>
    </AppShell>
  );
}