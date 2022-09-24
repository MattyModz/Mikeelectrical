import React from "react";
import { Review } from "../reviews/Reviewcarousel";
function index() {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div class="relative lg:mb-12 ">
            <img
              class="absolute -right- -bottom-8 xl:-bottom-12 xl:-right-4 "
              src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
              alt=""
            />
            <div class="pl-12 pr-6">
              <img class="relative" src="MikeRitchie.jpg" alt="" />
            </div>
            <div class="absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div class="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                <div class="px-3 py-4 sm:px-5 sm:py-8">
                  <div class="flex items-start">
                    <p class="text-3xl sm:text-4xl">👋</p>
                    <blockquote class="ml-5">
                      <Review />
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="2xl:pl-16">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              We make things easy for projects.
            </h2>
            <p class="text-xl leading-relaxed text-gray-900 mt-9">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia conse duis enim velit mollit.
              Exercitation veniam.
            </p>
            <p class="mt-6 text-xl leading-relaxed text-gray-900">
              Velit officia conse duis enim velit mollit. Exercit ation veniam
              consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
