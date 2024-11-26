import React from "react";
import { Heebo } from "next/font/google";
import pic1 from "../../assets/featuredw1.png";
import pic2 from "../../assets/featuredw2.png";
import pic3 from "../../assets/featuredw3.png";
import FeaturedPostsCard from "./microComp/featuredPostsCard";

const heebo = Heebo({ subsets: ["latin"] });

const FeaturedPosts = () => {
  return (
    <div className="lg:w-[919px] h-fit lg:h-[934.2px] mx-auto my-[66px] relative  lg:left-[-35px]">
      <h1
        className={`${heebo.className} leading-[32.31px] font-medium text-[22px] text-black text-center lg:text-left`}
      >
        Featured works
      </h1>
      <div className="my-8">
        <FeaturedPostsCard src={pic1} />
        <FeaturedPostsCard src={pic2} />
        <FeaturedPostsCard src={pic3} />
      </div>
    </div>
  );
};

export default FeaturedPosts;
