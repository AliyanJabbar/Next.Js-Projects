import React from "react";
import { Heebo } from "next/font/google";
// importing icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

// for google font
const heebo = Heebo({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="bg-footer w-[100%] h-[243px] flex flex-col items-center justify-center space-y-7 ">
      <div className="flex flex-row space-x-11">
        <Link href="">
          <FaFacebookSquare className="w-[30px] h-[30px] text-myblack" />
        </Link>
        <Link href="">
          <FaInstagram className="w-[30px] h-[30px] text-myblack" />
        </Link>
        <Link href="">
          <FaTwitter className="w-[30px] h-[30px] text-myblack" />
        </Link>
        <Link href="">
          <FaLinkedin className="w-[30px] h-[30px] text-myblack" />
        </Link>
      </div>
      <p className={`${heebo.className} font-medium text-[17px] md:text-[22px] text-nowrap`}>
        Copyright ©2020 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
