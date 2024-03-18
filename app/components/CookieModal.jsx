"use client";
// components/CookieModal.js
import React from 'react';
import Cookie from 'js-cookie';

const CookieModal = ({ onAccept }) => {
  const handleAccept = () => {
    Cookie.set('analytics', 'accepted', { expires: 365 ,sameSite: "None", secure: true });
    onAccept();
  };

  return (
    <div className="cookie-modal">
      <p>This site uses cookies to analyze traffic and enhance your experience.</p>
      <button className='cookie-modal-button' onClick={handleAccept}>Accept cookies</button>
    </div>
  );
};

export default CookieModal;