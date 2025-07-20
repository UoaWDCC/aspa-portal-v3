"use client";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import React from "react";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import { theme } from "../theme";

import { NavBar } from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Footer/Footer";

const links = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "ASPA Team", href: "/contact" },
  { name: "Profile", href: "/contact" },
];

const socialMediaLinks = [
  { name: "Twitter", icon: "/twitter.svg", href: "https://twitter.com" },
  { name: "Facebook", icon: "/facebook.svg", href: "https://facebook.com" },
  { name: "Instagram", icon: "/instagram.svg", href: "https://instagram.com" },
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
