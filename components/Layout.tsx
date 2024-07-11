import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Comic Page</title>
        <meta name="description" content="A comic page with server-side rendering" />
        <meta name="author" content="Your Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
