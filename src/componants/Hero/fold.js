import React from "react";
import Image from "next/image";
function Fold() {
  return (
    <div class="overflow-x-hidden  ">
      <section class="relative  xl:pb-0">
        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-center">
            {" "}
            <Image width={200} height={100} src="/logoicon.svg" alt="" />
          </div>
          <div className="flex justify-center">
            {" "}
            <Image width={200} height={100} src="/logo.svg" alt="" />
          </div>

          <div class="max-w-3xl mx-auto text-center">
            <h1 class=" text-4xl  leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-inter ">
              Electrical Engineer Serving The North West
            </h1>

            <p class="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
              massa in enim luctus. Rutrum arcu.
            </p>

            <div class="relative inline-flex mt-4 group">
              <Image src={"/Nic cert.svg"} height={90} width={180} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fold;
