import Head from 'next/head'
import Home from '../components/Home/Home'

export default function App() {
  return (
    <>
      <Head>
        <title>Waytraveltrek</title>
        <meta name="description" content="Waytraveltrek's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />

    </>
  )
}
