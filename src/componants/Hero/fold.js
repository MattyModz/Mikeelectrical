import React from "react";
import Image from "next/image";
function Fold() {
  return (
    <div className="overflow-x-hidden bg-gray-50  ">
      <section className="relative  xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-center">
            {" "}
            <Image width={200} height={100} src="/logoicon.svg" alt="" />
          </div>

          <div className="max-w-5xl mx-auto text-center mt-2">
            <h1 className=" text-4xl leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-inter ">
              Leading Electrical Engineer Serving The North West
            </h1>

            <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 ">
              Leading Electrical Engineer Serving The North West
            </p>

            <div className="relative inline-flex mt-4 group">
              <Image src={"/Nic cert.svg"} height={90} width={180} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fold;
