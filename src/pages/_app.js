import { Layout } from '@components/Layout';
import '@styles/globals.css';
import 'animate.css';
import AppContext from '@context/AppContext';
import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/router';

const progress = new ProgressBar({
  size: 3,
  delay: 100,
  color: 'rgb(0,0,0)',
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

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
