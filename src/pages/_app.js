import { Layout } from '@components/Layout';
import '@styles/globals.css';
import 'animate.css';
import AppContext from '@context/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <AppContext.Provider> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </AppContext.Provider> */}
    </>
  );
}

export default MyApp;
