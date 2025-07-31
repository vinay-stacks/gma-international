'use client';

import { useEffect } from 'react';

const WhatsAPP = () => {
  useEffect(() => {
    // Create and append the script tag for DelightChat widget
    const script = document.createElement('script');
    script.src = 'https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Configuration object
    const wa_btnSetting = {
      btnColor: '#16BE45',
      ctaText: 'WhatsApp Us',
      cornerRadius: 40,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      btnPosition: 'left',
      whatsAppNumber: '9319061527',
      welcomeMessage: 'Hello',
      zIndex: 999999,
      btnColorScheme: 'light',
    };

    // Wait for script to load and call the global function
    script.onload = () => {
      if (typeof window !== 'undefined' && typeof (window as any)._waEmbed === 'function') {
        (window as any)._waEmbed(wa_btnSetting);
      }
    };

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default WhatsAPP;
