import "../src/styles/index.scss";
import { AnimatePresence } from "framer-motion";
import Footer from "../src/componants/Footer/index";
import Header from "../src/componants/Header/header";
import { useEffect, useState } from "react";
import Loading from "../src/componants/loading";
function MyApp({ Component, pageProps, router }) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <Header />

      <AnimatePresence exitBeforeEnter>
        <Loading loading={loading} />
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
