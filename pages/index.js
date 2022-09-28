import React from "react";
import Index from "../src/componants/Hero";
import About from "../src/componants/About/index";
import { sanityClient } from "../sanity";
import Blogcard from "../src/componants/Blog";
import Contact from "../src/componants/Contact/index";
import { PrimaryFeatures } from "../src/componants/Services.js";
import Reviews from "../src/componants/Marquee";
export default function Home({ posts, reviews }) {
  console.log(reviews);
  return (
    <>
      <Index />

      <PrimaryFeatures />
      <About />
      <Reviews reviews={reviews} />
      <Contact />
      <div className="flex justify-center bg-gray-50">
        {" "}
        <Blogcard posts={posts} />
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"][0..0]{
  _id,
  title,

  author -> {
  name,
  image
},
description,
mainImage,
slug
}`;

  const queryreview = `*[_type == "reviews"]{
  
  title,
  review,
  stars,
  name,

}`;

  const posts = await sanityClient.fetch(query);
  const reviews = await sanityClient.fetch(queryreview);
  return {
    props: {
      posts,
      reviews,
    },
  };
};
