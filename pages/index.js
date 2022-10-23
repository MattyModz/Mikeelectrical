import React from "react";
import Index from "../src/componants/Hero";
import About from "../src/componants/About/index";
import { sanityClient } from "../sanity";
import Blogcard from "../src/componants/Blog";
import Contact from "../src/componants/Contact/index";
import { PrimaryFeatures } from "../src/componants/Services.js";
import Reviews from "../src/componants/Marquee";
import Faq from "../src/componants/Faq's/index";
export default function Home({
  posts,
  reviews,
  domesticlist,
  faq,
  planninglist,
  industriallist,
}) {
  console.log(domesticlist);
  return (
    <>
      <Index />
      <div id="services">
        <PrimaryFeatures
          indus={domesticlist}
          plan={planninglist}
          dom={industriallist}
        />
      </div>
      <div id="about">
        {" "}
        <About />
      </div>
      <div id="reviews">
        {" "}
        <Reviews reviews={reviews} />
      </div>
      <div>
        <Faq data={faq} />
      </div>

      <div id="contact">
        {" "}
        <Contact />
      </div>

      <div id="blog">
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
  reviewimg

}`;

  const FAQ = `*[_type == "faq"]{
question,
answer,

}`;

  const domestic = `*[_type == "domestic"]{
  
service,
description,


}`;
  const industrial = `*[_type == "industrial"]{
  

service,
description,


}`;

  const planning = `*[_type == "planning"]{

service,
description,

}`;

  const posts = await sanityClient.fetch(query);
  const domesticlist = await sanityClient.fetch(domestic);
  const industriallist = await sanityClient.fetch(industrial);
  const faq = await sanityClient.fetch(FAQ);
  const planninglist = await sanityClient.fetch(planning);
  const reviews = await sanityClient.fetch(queryreview);

  return {
    props: {
      posts,
      reviews,
      domesticlist,
      industriallist,
      faq,
      planninglist,
    },
  };
};
