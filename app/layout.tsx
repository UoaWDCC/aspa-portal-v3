"use client";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import React from "react";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme";

import { NavBar } from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Footer/Footer";

const links = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "ASPA Team", href: "/contact" },
  { name: "Profile", href: "/profile" },
  { name: "Sign Up", href: "/signup" },
];

const socialMediaLinks = [
  { name: "Discord", icon: "discord", href: "https://discord.com" },
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/company/aspa-uoa/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/aspa.uoa/",
  },
  { name: "Facebook", icon: "facebook", href: "https://facebook.com" },
];

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <NavBar links={links} />

          {children}

          <Footer socialMediaLinks={socialMediaLinks} />
        </MantineProvider>
      </body>
    </html>
  );
}
