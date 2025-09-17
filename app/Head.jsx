"use client";
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import CookieModal from './components/CookieModal';

const Head = () => {
  const [cookieAccepted, setCookieAccepted] = useState(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookieAccepted");
    if (storedConsent === "true") {
      setCookieAccepted(true);
      ReactGA.initialize("TU_ID_DE_SEGUIMIENTO", {
        gaOptions: { cookieFlags: "samesite=none;secure" },
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    } else {
      setCookieAccepted(false);
    }
  }, []);

  const handleAcceptCookie = () => {
    localStorage.setItem("cookieAccepted", "true");
    setCookieAccepted(true);

    ReactGA.initialize("TU_ID_DE_SEGUIMIENTO", {
      gaOptions: { cookieFlags: "samesite=none;secure" },
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  };

  if (cookieAccepted === null) return null;

  return (
    <>
      {!cookieAccepted && <CookieModal onAccept={handleAcceptCookie} />}
    </>
  );
};

export default Head;
