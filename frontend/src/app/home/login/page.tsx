// components/LoginButton.tsx
import SignIn from '@/app/components/sign-in';
import React, { useState } from 'react';

const LoginButton = () => {
  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log('Sign in button clicked');
    // Example: Redirect user or perform authentication
  };
}

export default function Login() {
  return (
    <div className="button-container">
      <button className="sign-in-button">
        <img src="google-icon-PNG.png" alt="Google Icon" className="icon" />
        <SignIn />
      </button>
    </div>
  );
}
