import Head from 'next/head';
import HotelPage from '../../components/Hotel/HotelPage';

export default function Hotels() {
  return (
    <>
      <Head>
        <title>Waytraveltrek</title>
        <meta
          name="description"
          content="Waytraveltrek's website. Hotels page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HotelPage />
    </>
  );
}
