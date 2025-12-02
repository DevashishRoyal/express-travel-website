import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
