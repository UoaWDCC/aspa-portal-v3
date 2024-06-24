'use client';
import React from 'react';
import styles from './socials.module.css';
import { InstagramEmbed } from 'react-social-media-embed/dist/components/embeds/InstagramEmbed';
import { LinkedInEmbed } from 'react-social-media-embed/dist/components/embeds/LinkedInEmbed';
import { FacebookEmbed } from 'react-social-media-embed/dist/components/embeds/FacebookEmbed';

function Socials() {
  return (
    <div className={styles.socials}>
        <div className={styles.socialsBorders}>
            <InstagramEmbed className={styles.previews} url="https://www.instagram.com/aspa.uoa/?hl=en"/>
        </div>
        <div className={styles.socialsBorders}>
            <LinkedInEmbed className={styles.previews} url="https://www.linkedin.com/company/aspa-auckland-student-pool-association"/>
        </div>
        <div className={styles.socialsBorders}>
            <FacebookEmbed className={styles.previews} url="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Faspa.uoa%2F"/>
        </div>
    </div>
  );
}

export default Socials;