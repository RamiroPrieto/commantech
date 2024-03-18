"use client";
import React from 'react'
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import CookieModal from './components/CookieModal';

const Head = () => {

  useEffect(() => {
    ReactGA.initialize('TU_ID_DE_SEGUIMIENTO', {
      gaOptions: {
        cookieFlags: 'samesite=none;secure',
      },
    }); // Reemplaza 'TU_ID_DE_SEGUIMIENTO' con el ID de seguimiento real
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const [cookieAccepted, setCookieAccepted] = React.useState(false);

  const handleAcceptCookie = () => {
    setCookieAccepted(true);
  };

  return (
    <>
      {!cookieAccepted && <CookieModal onAccept={handleAcceptCookie} />}
    </>
  );
}

export default Head
