"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Executive } from "@/payload-types";
import styles from "./ExecutiveCollection.module.css";

export interface ExecutiveCollection {
  executives: Executive[];
  sectionTitle?: string;
}

export function ExecutiveCollection({
  executives,
  sectionTitle,
}: ExecutiveCollection) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother);

    if (wrapperRef.current && contentRef.current) {
      const skewSetter = gsap.quickTo("img", "skewY");
      const clamp = gsap.utils.clamp(-20, 20);

      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 2,
        speed: 3,
        effects: true,
        onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
        onStop: () => skewSetter(0),
      });
    }
  }, []);

  return (
    <>
      {/* Titles */}
      {sectionTitle && (
        <>
          <h1 className={styles.text}>{sectionTitle}</h1>
          <h1
            aria-hidden="true"
            className={`${styles.text} ${styles.outlineText}`}
          >
            {sectionTitle}
          </h1>
          <h1
            aria-hidden="true"
            className={`${styles.text} ${styles.filterText}`}
          >
            {sectionTitle}
          </h1>
        </>
      )}

      {/* Wrapper + Content */}
      <div id="wrapper" ref={wrapperRef}>
        <section id="content" ref={contentRef}>
          <section className={styles.images}>
            {executives.map((executive, index) => (
              <img
                key={index}
                data-speed={(0.8 + index * 0.1).toFixed(1)} // vary speeds slightly
                src={executive?.image?.url || "/placeholder.jpg"}
                alt={executive?.name || "Executive"}
              />
            ))}
          </section>
        </section>
      </div>
    </>
  );
}
