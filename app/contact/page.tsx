"use client";

import { Executive } from "@/components/Contact/Card/ExecutiveCardDisplay";
import { ExecutiveCollection } from "@/components/Contact/Collection/ExecutiveCollection";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [executives, setExecutives] = useState<Executive[]>([
    {
      name: "Johnny Shen",
      title: "President",
      description: "Leads the team with a strong vision and strategy.",
      imageUrl: "/images/johnny.jpg",
      backContent: "Johnny has been leading the team since 2020.",
    },
    {
      name: "Ryan Fraser",
      title: "Vice President",
      description: "Oversees internal operations and project coordination.",
      imageUrl: "/images/ryan.jpg",
      backContent: "Ryan has a background in logistics and leadership.",
    },
        {
      name: "Johnny Shen",
      title: "President",
      description: "Leads the team with a strong vision and strategy.",
      imageUrl: "/images/johnny.jpg",
      backContent: "Johnny has been leading the team since 2020.",
    },
    {
      name: "Ryan Fraser",
      title: "Vice President",
      description: "Oversees internal operations and project coordination.",
      imageUrl: "/images/ryan.jpg",
      backContent: "Ryan has a background in logistics and leadership.",
    },
        {
      name: "Johnny Shen",
      title: "President",
      description: "Leads the team with a strong vision and strategy.",
      imageUrl: "/images/johnny.jpg",
      backContent: "Johnny has been leading the team since 2020.",
    },
    {
      name: "Ryan Fraser",
      title: "Vice President",
      description: "Oversees internal operations and project coordination.",
      imageUrl: "/images/ryan.jpg",
      backContent: "Ryan has a background in logistics and leadership.",
    },
  ]);

  return (
    //moves the body down from under the header, should probably fix this in layout
    <div style={{ paddingTop: "180px", paddingBottom: "30px" }}>
      <ExecutiveCollection executives={executives}></ExecutiveCollection>
    </div>
  );
}
