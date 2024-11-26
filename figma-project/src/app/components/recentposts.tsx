import React from "react";
import { Heebo } from "next/font/google";
import Link from "next/link";
import RecentPostCard from "./microComp/recentPostCard";

// for google font
const heebo = Heebo({ subsets: ["latin"] });

const RecentPosts = () => {
  return (
    <div className="lg:h-[502px] h-fit pb-20 lg:pb-0 bg-myLPink my-[66px]">
      {/* headings */}
      <ul
        className={`flex justify-between font-medium w-[92%] lg:w-[1030px] p-6 mx-auto text-[22px] leading-[32.31px] ${heebo.className}`}
      >
        <li>Recent Post</li>
        <Link href="">
          <li className="text-myDPink cursor-pointer hover:underline">
            View all
          </li>
        </Link>
      </ul>
      {/* boxes for recent posts */}
      <div className="flex w-[370px] min-[600px]:w-[515px] flex-col lg:flex-row justify-between lg:w-[1030px] mx-auto px-6 space-y-10 lg:space-y-0">
        {/* card 1 */}
        <RecentPostCard />
        {/* card 2 */}
        <RecentPostCard />
      </div>
    </div>
  );
};

export default RecentPosts;
