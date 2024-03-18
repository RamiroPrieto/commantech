// components/AnalyticsComponent.js
"use client";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Cookie from 'js-cookie';

const AnalyticsComponent = () => {
  useEffect(() => {
    ReactGA.initialize('G-G5VPXS1CXL', {
        gaOptions: {
          cookieFlags: 'samesite=none;secure',
        },
      }); // Reemplaza 'TU_ID_DE_SEGUIMIENTO' con el ID de seguimiento real
      ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      {/* Contenido de tu componente */}
    </div>
  );
};

export default AnalyticsComponent;
