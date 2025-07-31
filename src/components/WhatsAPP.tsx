'use client';

import { useEffect } from 'react';

const WhatsAPP = () => {
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    const existingScript = document.querySelector('script[src*="delightchat-whatsapp-widget"]');
    if (existingScript) return; // Prevent double script insertion

    const script = document.createElement('script');
    script.src = 'https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js';
    script.async = true;
    script.onload = () => {
      if (typeof (window as any)._waEmbed === 'function') {
        (window as any)._waEmbed({
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
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      script.remove();
    };
  }, []);

  return null; // No visual component
};

export default WhatsAPP;
