import React from "react";
import Index from "../src/componants/Hero";

import { sanityClient } from "../sanity";
import Blogcard from "../src/componants/Blog";
export default function Home({ posts }) {
  return (
    <>
      <Index />

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
