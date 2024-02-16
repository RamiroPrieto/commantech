"use client";
import React, { useEffect } from 'react'

const Head = () => {

  useEffect(() => {
    // Initialize GTM only on the client-side
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtm.js?id=G-G5VPXS1CXL`;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  
  return (
    <></>
  )
}

export default Head
