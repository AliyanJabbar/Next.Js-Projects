import Image, { StaticImageData } from "next/image";
import React from "react";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

const FeaturedPostsCard = (props:{src:StaticImageData}) => {
  return (
    <div className="flex flex-col mb-28">
      {/* Card */}
      <div className="flex flex-col lg:flex-row gap-7">
        {/* for Image in Card */}
        <div>
          <Image
            src={props.src}
            alt="Fetured Work 1"
            className="w-[246px] h-[180px] rounded-[6px] lg:mx-0 mx-auto"
          />
        </div>
        {/* for text in Card */}
        <div className="flex flex-col lg:mx-0 lg:text-left text-center mx-auto w-[90%]">
          {/* text content 1 */}
          <h1
            className={`${heebo.className} text-[30px] font-[700] leading-[44.06px]`}
          >
            Designing Dashboards
          </h1>
          {/* text content 2 */}
          <div className="flex flex-row gap-6 mt-2 mb-4 lg:mx-0 mx-auto">
            <p
              className={`${heebo.className} w-[68px] h-[24px] rounded-[50px] bg-myDPink text-[18px] font-[700] leading-[26.44px] text-white text-center`}
            >
              2020
            </p>
            <p
              className={`${heebo.className} text-[20px] font-[400] leading-[29.38px] text-black text-opacity-[62%]`}
            >
              Dashboard
            </p>
          </div>
          {/* text content 3 */}
          <p className={`${heebo.className} text-[18px] font-[300] leading-[26.44px] w-[90%] mx-auto lg:mx-0 lg:w-[622px]`}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostsCard;
