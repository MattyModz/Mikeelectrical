import "../src/styles/index.scss";
import { AnimatePresence } from "framer-motion";
import Footer from "../src/componants/Footer/index";
import Header from "../src/componants/Header/header";

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <Header />

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default MyApp;
//  <ApolloProvider client={client}>
// </ApolloProvider>
{
  /* <Loading loading={loading} />; */
}
