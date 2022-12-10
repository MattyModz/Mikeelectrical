import React from "react";
import Index from "../src/componants/Hero";
import About from "../src/componants/About/index";
import { sanityClient } from "../sanity";
import Blogcard from "../src/componants/Blog";
import Contact from "../src/componants/Contact/index";
import { PrimaryFeatures } from "../src/componants/Services.js";
import Reviews from "../src/componants/Marquee";
import Faq from "../src/componants/Faq's/index";

export default function Home({ data }) {
  const domestic = data.filter((doc) => doc._type === "domestic");
  const commercial = data.filter((doc) => doc._type === "commercial");
  const industrial = data.filter((doc) => doc._type === "industrial");
  const posts = data.filter((doc) => doc._type === "post");
  const reviews = data.filter((doc) => doc._type === "reviews");
  const faq = data.filter((doc) => doc._type === "FAQ");
  console.log(posts);
  return (
    <>
      <Index />
      <div id="services">
        <PrimaryFeatures indus={industrial} plan={commercial} dom={domestic} />
      </div>
      <About />
      <div id="reviews">
        {" "}
        <Reviews reviews={reviews} />{" "}
      </div>
      <div>
        {" "}
        <Faq data={faq} />{" "}
      </div>

      <div id="contact">
        {" "}
        <Contact />
      </div>

      <div id="blog">
        {" "}
        <Blogcard posts={posts} />{" "}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type in ["domestic", "commercial", "industrial", "post", "reviews", "FAQ"]]`;
  const data = await sanityClient.fetch(query);

  return {
    props: {
      data,
    },
  };
};
