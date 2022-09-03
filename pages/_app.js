import "../src/styles/index.scss";
import { AnimatePresence } from "framer-motion";
// import Footer from "../src/componants/Footer/footer";
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
    }, 10);
  }, []);
  return (
    <div>
      <Header />

      <AnimatePresence exitBeforeEnter>
        <Loading loading={Loading} />
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
//  <ApolloProvider client={client}>
// </ApolloProvider>
{
  /* <Loading loading={loading} />; */
}
