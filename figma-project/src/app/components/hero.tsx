import React from "react";
import Image from "next/image";
import heroImg from "../../assets/figma project's image.png";
import { Heebo } from "next/font/google";
import Link from "next/link";

// for google font
const heebo = Heebo({ subsets: ["latin"] });
const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:gap-40 min-[950px]:justify-evenly lg:justify-between min-[950px]:flex-row my-[120px] min-[950px]:my-[105px] mx-auto lg:w-[1030px] w-[92%] min-[950px]:h-[308px] p-6">
      {/* text */}
      <div className="text-left w-[90%] md:w-[551px] h-[305px] space-y-5 md:space-y-8">
        <h1
          className={`text-myblack text-[40px] md:text-[48px] font-[900] ${heebo.className} tracking-[2px] leading-[50px] min-[540px]:leading-[61px]`}
        >
          Hi, I am John, <br />
          Creative Technologist
        </h1>
        <p
          className={`${heebo.className} text-myblack text-[16px] font-[400] leading-[23.5px] `}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        {/* Download resume button */}
        <button
          className={`${heebo.className} w-[205px] h-[50px] rounded-[2px] font-[500] leading-[26.44px] shadow-btnShadow bg-myDPink text-center text-white`}
        ><Link href={""}>Download Resume</Link></button>
      </div>
      {/* image */}
      <div className="relative w-[292px] h-[299px] rounded-full z-10 mx-auto">
        <Image
          src={heroImg}
          alt="Hero Pic"
          width={292}
          height={299}
          className="rounded-full "
        />
        <div className="bg-imgBack w-[292px] h-[299px] rounded-full absolute top-[1px] right-[7px] -z-10" />
      </div>
    </div>
  );
};

export default Hero;
