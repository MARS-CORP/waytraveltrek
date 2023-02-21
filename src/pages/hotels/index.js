import Head from 'next/head';
import { HotelPage } from '@components/Hotel/HotelPage';

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

// export async function getStaticProps() {
//   try {
//     const res = await fetch(`${process.env.ENDPOINT_API}/hotels`);
//     const hotels = await res.json();

//     return {
//       props: {
//         hotels,
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       notFound: true,
//     };
//   }
// }
