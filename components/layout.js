import Navbar from './navbar';
import Footer from './footer';

import { ScrollingProvider } from 'react-scroll-section';

export default function Layout({ children }) {
  return (
    <ScrollingProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ScrollingProvider>
  );
}
