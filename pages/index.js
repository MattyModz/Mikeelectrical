import React from "react";
import Index from "../src/componants/Hero";
import About from "../src/componants/About/index";
import { sanityClient } from "../sanity";
import Blogcard from "../src/componants/Blog";
import Contact from "../src/componants/Contact/index";
import { PrimaryFeatures } from "../src/componants/Services.js";
export default function Home({ posts }) {
  return (
    <>
      <Index />
      <PrimaryFeatures />
      <About />
      <Contact />
      <Blogcard posts={posts} />
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

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
