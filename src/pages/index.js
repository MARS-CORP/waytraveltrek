import Head from 'next/head';
import Home from '../components/Home/Home';

export default function App({ destinations }) {
  console.log(destinations);
  return (
    <>
      <Head>
        <title>Waytraveltrek</title>
        <meta name="description" content="Waytraveltrek's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
}

export async function loadDestinations() {
  const res = await fetch('http://localhost:8080/api/v1/destinations');
  const data = await res.json();

  return data;
}

export async function getStaticProps() {
  const destinations = await loadDestinations();

  return { props: { destinations } };
}
