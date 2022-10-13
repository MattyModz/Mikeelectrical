import React from "react";
import Index from "../src/componants/Hero";
import About from "../src/componants/About/index";
import { sanityClient } from "../sanity";
import Blogcard from "../src/componants/Blog";
import Contact from "../src/componants/Contact/index";
import { PrimaryFeatures } from "../src/componants/Services.js";
import Reviews from "../src/componants/Marquee";
export default function Home({
  posts,
  reviews,
  domesticlist,
  commerciallist,
  planninglist,
  industriallist,
}) {
  console.log(industriallist);
  return (
    <>
      <Index />

      <PrimaryFeatures />
      <About />
      <Reviews reviews={reviews} />
      <Contact />
      <div className="flex justify-center  p-12">
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

  const domestic = `*[_type == "domestic"]{
  
service,


}`;
  const industrial = `*[_type == "industrial"]{
  

service,


}`;
  const commercial = `*[_type == "commerical"]{
  

service,

}`;
  const planning = `*[_type == "planning"]{

service,

}`;

  const posts = await sanityClient.fetch(query);
  const domesticlist = await sanityClient.fetch(domestic);
  const industriallist = await sanityClient.fetch(industrial);
  const commerciallist = await sanityClient.fetch(commercial);
  const planninglist = await sanityClient.fetch(planning);
  const reviews = await sanityClient.fetch(queryreview);
  return {
    props: {
      posts,
      reviews,
      domesticlist,
      industriallist,
      commerciallist,
      planninglist,
    },
  };
};
