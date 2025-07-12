"use client";

import { createTheme } from "@mantine/core";
import { Nova_Square, Josefin_Sans } from "next/font/google";


export const novaSquare = Nova_Square({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

export const josefinSans = Josefin_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});


export const theme = createTheme({
  fontFamily: josefinSans.style.fontFamily,           
  headings: { fontFamily: novaSquare.style.fontFamily }
});
