"use client";

import { Executive } from "@/payload-types";
import { ExecutiveCollection } from "@/components/Contact/Collection/ExecutiveCollection";
import { useState } from "react";

export default function ContactPage() {
  const [mainExecs] = useState<Executive[]>([
    {
      id: 1,
      name: "Johnny Shen",
      title: "President",
      description:
        "Leads the team with a strong vision and strategy. Tap to see more.",
      imageUrl: {
        id: 1,
        alt: "Johnny Shen headshot",
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        url: "/images/johnny.jpg",
        thumbnailURL: "/images/johnny-thumb.jpg",
        filename: "johnny.jpg",
        mimeType: "image/jpeg",
        filesize: 150000,
        width: 400,
        height: 400,
        focalX: 50,
        focalY: 50,
      },
      backContent: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              version: 1,
              children: [
                {
                  type: "text",
                  version: 1,
                  text: "Johnny has been leading the team since 2020.",
                },
              ],
            },
          ],
          direction: null,
          format: "",
          indent: 0,
          version: 1,
        },
      },
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: "Ryan Fraser",
      title: "Vice President",
      description: "Oversees internal operations and project coordination.",
      imageUrl: {
        id: 2,
        alt: "Ryan Fraser headshot",
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        url: "/images/ryan.jpg",
        thumbnailURL: "/images/ryan-thumb.jpg",
        filename: "ryan.jpg",
        mimeType: "image/jpeg",
        filesize: 145000,
        width: 400,
        height: 400,
        focalX: 50,
        focalY: 50,
      },
      backContent: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              version: 1,
              children: [
                {
                  type: "text",
                  version: 1,
                  text: "Ryan has a background in logistics and leadership.",
                },
              ],
            },
          ],
          direction: null,
          format: "",
          indent: 0,
          version: 1,
        },
      },
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      name: "Amado Manaois III",
      title: "Secretary",
      description: "Leads the team with a strong vision and strategy.",
      imageUrl: {
        id: 3,
        alt: "Amado Manaois III headshot",
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        url: "/images/Amado.jpg",
        thumbnailURL: "/images/Amado-thumb.jpg",
        filename: "Amado.jpg",
        mimeType: "image/jpeg",
        filesize: 155000,
        width: 400,
        height: 400,
        focalX: 50,
        focalY: 50,
      },
      backContent: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              version: 1,
              children: [
                {
                  type: "text",
                  version: 1,
                  text: "Amado has been leading the team since 2020.",
                },
              ],
            },
          ],
          direction: null,
          format: "",
          indent: 0,
          version: 1,
        },
      },
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: 4,
      name: "Ping An Qiu",
      title: "Photographer & Treasurer",
      description: "Oversees internal operations and project coordination.",
      imageUrl: {
        id: 4,
        alt: "Ping An Qiu headshot",
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        url: "/images/Ping.jpg",
        thumbnailURL: "/images/Ping-thumb.jpg",
        filename: "Ping.jpg",
        mimeType: "image/jpeg",
        filesize: 160000,
        width: 400,
        height: 400,
        focalX: 50,
        focalY: 50,
      },
      backContent: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              version: 1,
              children: [
                {
                  type: "text",
                  version: 1,
                  text: "Ping has a background in logistics and leadership.",
                },
              ],
            },
          ],
          direction: null,
          format: "",
          indent: 0,
          version: 1,
        },
      },
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: 5,
      name: "Sky Zhang",
      title: "Senior Advisor",
      description: "Leads the team with a strong vision and strategy.",
      imageUrl: {
        id: 5,
        alt: "Sky Zhang headshot",
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        url: "/images/sky.jpg",
        thumbnailURL: "/images/sky-thumb.jpg",
        filename: "sky.jpg",
        mimeType: "image/jpeg",
        filesize: 140000,
        width: 400,
        height: 400,
        focalX: 50,
        focalY: 50,
      },
      backContent: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              version: 1,
              children: [
                {
                  type: "text",
                  version: 1,
                  text: "Sky has been leading the team since 2020.",
                },
              ],
            },
          ],
          direction: null,
          format: "",
          indent: 0,
          version: 1,
        },
      },
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: 6,
      name: "Zen Dogra",
      title: "Financial Advisor",
      description: "Oversees internal operations and project coordination.",
      imageUrl: {
        id: 6,
        alt: "Zen Dogra headshot",
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        url: "/images/zen.jpg",
        thumbnailURL: "/images/zen-thumb.jpg",
        filename: "zen.jpg",
        mimeType: "image/jpeg",
        filesize: 165000,
        width: 400,
        height: 400,
        focalX: 50,
        focalY: 50,
      },
      backContent: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              version: 1,
              children: [
                {
                  type: "text",
                  version: 1,
                  text: "Zen has a background in logistics and leadership.",
                },
              ],
            },
          ],
          direction: null,
          format: "",
          indent: 0,
          version: 1,
        },
      },
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  ]);

  const [marketingExecs] = useState<Executive[]>([
    {
      id: 7,
      name: "Anya Cheng",
      title: "Marketing (Designer)",
      description: "Handles branding and social outreach.",
      imageUrl: {
        id: 7,
        alt: "Anya Cheng headshot",
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        url: "/images/anya.jpg",
        thumbnailURL: "/images/anya-thumb.jpg",
        filename: "anya.jpg",
        mimeType: "image/jpeg",
        filesize: 148000,
        width: 400,
        height: 400,
        focalX: 50,
        focalY: 50,
      },
      backContent: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              version: 1,
              children: [
                {
                  type: "text",
                  version: 1,
                  text: "Anya grew our engagement by 200% in 2024.",
                },
              ],
            },
          ],
          direction: null,
          format: "",
          indent: 0,
          version: 1,
        },
      },
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: 8,
      name: "Jessica Park",
      title: "Marketing (Social Media)",
      description: "Creates and schedules online content.",
      imageUrl: {
        id: 8,
        alt: "Jessica Park headshot",
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        url: "/images/jess.jpg",
        thumbnailURL: "/images/jess-thumb.jpg",
        filename: "jess.jpg",
        mimeType: "image/jpeg",
        filesize: 152000,
        width: 400,
        height: 400,
        focalX: 50,
        focalY: 50,
      },
      backContent: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              version: 1,
              children: [
                {
                  type: "text",
                  version: 1,
                  text: "Jessica keeps our socials fun and fresh.",
                },
              ],
            },
          ],
          direction: null,
          format: "",
          indent: 0,
          version: 1,
        },
      },
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: 9,
      name: "Jasmine Cheung",
      title: "Marketing (Manager)",
      description: "Creates and schedules online content.",
      imageUrl: {
        id: 9,
        alt: "Jasmine Cheung headshot",
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        url: "/images/jasmine.jpg",
        thumbnailURL: "/images/jasmine-thumb.jpg",
        filename: "jasmine.jpg",
        mimeType: "image/jpeg",
        filesize: 158000,
        width: 400,
        height: 400,
        focalX: 50,
        focalY: 50,
      },
      backContent: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              version: 1,
              children: [
                {
                  type: "text",
                  version: 1,
                  text: "Jasmine keeps our socials fun and fresh.",
                },
              ],
            },
          ],
          direction: null,
          format: "",
          indent: 0,
          version: 1,
        },
      },
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  ]);

  const [eventsExecs] = useState<Executive[]>([
    {
      id: 10,
      name: "Tony Feng",
      title: "Events Team Lead",
      description: "Coordinates club events and logistics.",
      imageUrl: {
        id: 10,
        alt: "Tony Feng headshot",
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        url: "/images/tony.jpg",
        thumbnailURL: "/images/tony-thumb.jpg",
        filename: "tony.jpg",
        mimeType: "image/jpeg",
        filesize: 162000,
        width: 400,
        height: 400,
        focalX: 50,
        focalY: 50,
      },
      backContent: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              version: 1,
              children: [
                {
                  type: "text",
                  version: 1,
                  text: "Tony organized the 2024 Welcome Gala.",
                },
              ],
            },
          ],
          direction: null,
          format: "",
          indent: 0,
          version: 1,
        },
      },
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: 11,
      name: "Doris Shen",
      title: "Events Coordinator",
      description: "Creates and schedules online content.",
      imageUrl: {
        id: 11,
        alt: "Doris Shen headshot",
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        url: "/images/doris.jpg",
        thumbnailURL: "/images/doris-thumb.jpg",
        filename: "doris.jpg",
        mimeType: "image/jpeg",
        filesize: 147000,
        width: 400,
        height: 400,
        focalX: 50,
        focalY: 50,
      },
      backContent: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              version: 1,
              children: [
                {
                  type: "text",
                  version: 1,
                  text: "Doris keeps our events running smoothly.",
                },
              ],
            },
          ],
          direction: null,
          format: "",
          indent: 0,
          version: 1,
        },
      },
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  ]);

  return (
    <div
      style={{
        paddingTop: "180px",
        backgroundColor: "#000000ff",
        paddingBottom: "30px",
      }}
    >
      <ExecutiveCollection
        executives={mainExecs}
        sectionTitle="Meet The Team"
      />
      <ExecutiveCollection
        executives={marketingExecs}
        sectionTitle="Marketing"
      />
      <ExecutiveCollection executives={eventsExecs} sectionTitle="Events" />
    </div>
  );
}
