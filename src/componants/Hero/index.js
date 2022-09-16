import React from "react";
import Carousel from "./carousel";
import Fold from "./fold";
import Contact from "../Contact";
import { Review } from "../reviews/Reviewcarousel";

function Index() {
  return (
    <>
      <Fold />
      {/* <Logocloud/> */}
      <Carousel />
      <div className="p-4">
        <Review />
      </div>
      <Contact />
    </>
  );
}

export default Index;
