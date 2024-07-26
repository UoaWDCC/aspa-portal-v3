'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './SignIn.module.css'; // Adjust the path as needed

const RegisterButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    // Perform client-side navigation
    router.push('/home/detail-form');
  };

  return (
    <button
      type="button"
      className={styles.registerButton}
      onClick={handleClick}
    >
      <h1 className={styles.subtitle}>Register</h1>
    </button>
  );
};

export default RegisterButton;
