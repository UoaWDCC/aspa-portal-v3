"use client";

import { createTheme } from "@mantine/core";
import { Zilla_Slab } from "next/font/google";

// Initialise the Zilla_Slab font
const zillaSlab = Zilla_Slab({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const theme = createTheme({
  colors: {
    "aspa-orange": [
      "#fff2e4",
      "#fbe6d3",
      "#f0ccaa",
      "#e5af7e",
      "#dc9758",
      "#d78840",
      "#d68032",
      "#bd6d24",
      "#a9611d",
      "#945212",
    ],
    "aspa-brown": [
      "#faf5ef",
      "#f0e8e0",
      "#e2cdbb",
      "#d5b192",
      "#c9996f",
      "#c38a59",
      "#c1834d",
      "#a96f3d",
      "#986335",
      "#845429",
    ],
    "aspa-gray": [
      "#f4f5f5",
      "#e7e7e7",
      "#cdcdcd",
      "#b1b1b1",
      "#999999",
      "#8a8a8a",
      "#838383",
      "#707071",
      "#636466",
      "#52575b",
    ],
  },

  fontFamily: zillaSlab.style.fontFamily,
  
});
