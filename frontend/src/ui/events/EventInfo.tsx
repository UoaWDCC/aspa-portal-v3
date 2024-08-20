'use client';

import React from 'react';
import styles from './EventInfo.module.css';
import Image from "next/image";

function EventInfo(){
  const handleSubmit = (event: React.ChangeEvent<any>) => {
    alert(`This should lead to the sign up popups.`)
}
  return (
    <div className={styles.descriptionBorder}>
        <div className={styles.infoBorder}>
          <div className={styles.info}>
            <h1>Bring Your Pet to Pool Day</h1>
            <p>Date: <span className='underline font-bold'>Sunday February 30th</span></p>
            <p>Time: <span className='underline font-bold'>12:00pm-2.00pm</span></p>
            <p>Entry Fee: <span className='underline font-bold'>$6.00</span></p>
          </div>
          <Image src='/Event Photo.svg' width={500} height={400} alt="Event Photo"/>
        </div>
        <button onClick={handleSubmit}>Sign Up Now!</button>
        <p>Join us for a paw-some poolside adventure at ASPA's "Pet-Pool Palooza" event! Dive into fun with your furry friends as we transform the pool deck into a pet paradise. Whether it's a playful splash with your pooch or a relaxing float with your feline friend, our pet-friendly pool day promises wagging tails and happy purrs all around. With contests, prizes, and plenty of treats, it's a tail-wagging, water-loving extravaganza you won't want to miss!</p>
    </div>
    )
}

export default EventInfo