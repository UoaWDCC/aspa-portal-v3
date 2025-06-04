"use client";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import React, { useEffect, useState } from "react";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "../theme";

import { NavBar } from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Footer/Footer";

import { FooterData } from "@/lib/cms-api/footer";

const links = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "Events", href: "/events" },
];

const socialMediaLinks = [
  { name: "Twitter", icon: "/twitter.svg", href: "https://twitter.com" },
  { name: "Facebook", icon: "/facebook.svg", href: "https://facebook.com" },
  { name: "Instagram", icon: "/instagram.svg", href: "https://instagram.com" },
];

export default function RootLayout({ children }: { children: any }) {
	const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await fetch("/api/footer");
        const data = await res.json();
        setFooterData(data);
      } catch (err) {
        console.error("Failed to fetch footer data:", err);
      }
    };

    fetchFooter();
  }, []);

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <NavBar links={links} />

          {children}

          <Footer 
						organizationName={footerData?.organizationName}
						organizationDescription={footerData?.organizationDescription}
						socialMediaLinks={socialMediaLinks}
					/>
        </MantineProvider>
      </body>
    </html>
  );
}
