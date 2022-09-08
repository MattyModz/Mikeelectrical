import React from "react";
import Carousel from "./carousel";
import Fold from "./fold";
import Contact from "../Contact";
// import Logocloud from "../Logocloud";

function Index() {
  return (
    <>
      <Fold />
      {/* <Logocloud/> */}
      <Carousel />

      <Contact />
    </>
  );
}

export default Index;
