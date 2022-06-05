import Script from 'next/script';
import Layout from '../components/layout';
import '../styles/globals.css';
import AOS from 'aos';
import React from 'react'

import 'aos/dist/aos.css';

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <Layout>
      {/* Font Awesome Kit */}
      <Script
        src='https://kit.fontawesome.com/754cd99e93.js'
        crossOrigin='anonymous'
      ></Script>
      <Component {...pageProps} />
    </Layout>
  );
}
