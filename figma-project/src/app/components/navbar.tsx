import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";

// for google font
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  // for navbar items
  let navItems = [
    {
      name: "Works",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];

  return (
    <ul
      className={`flex items-center justify-center md:justify-end m-[66px] h-[24px] font-[500] text-[20px] space-x-14 ${inter.className}`}
    >
      {navItems.map((item, i) => (
        <li key={i}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;