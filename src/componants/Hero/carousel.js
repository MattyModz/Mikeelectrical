import React from "react";
import Image from "next/image";
function Carousel() {
  return (
    <div className="bg-gray-50">
      <div className="w-full  bg-gray-50 ">
        <div className=" bg-gray-50 ">
          <ul className="track bg-gray-50">
            <li className="track__item">
              <Image src={"/Pictwo.jpg"} width={500} height={500} />
            </li>
            <li className="track__item">
              <Image src={"/Picone.jpg"} width={500} height={500} />
            </li>
            <li className="track__item">
              <Image src={"/Pictwo.jpg"} width={500} height={500} />
            </li>
            <li className="track__item">
              <Image src={"/Picone.jpg"} width={500} height={500} />
            </li>
            <li className="track__item">
              <Image src={"/Pictwo.jpg"} width={500} height={500} />
            </li>
            <li className="track__item">
              <Image src={"/Pictwo.jpg"} width={500} height={500} />
            </li>
            <li className="track__item">
              <Image src={"/Pictwo.jpg"} width={500} height={500} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
