import React from 'react';
import Head from 'next/head';
import ContactPage from '@components/Contact/ContactPage';

export default function index() {
  return (
    <>
      <Head>
        <title>Waytraveltrek</title>
        <meta
          name="description"
          content="Waytraveltrek's website. Contact page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactPage />
    </>
  );
}
