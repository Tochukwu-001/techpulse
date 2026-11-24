"use client"
import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { Colors } from "./Colors";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Nav() {

  const [navOpen, setNavOpen] = useState(false)

  const navItems = [
    { name: "Home", url: "/" },
    { name: "History", url: "/history" },
    { name: "Locations", url: "/locations" },
    { name: "Feed", url: "/feed" },
    { name: "Make Post", url: "/post" },
  ];
  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md sticky top-0 bg-white">
      <Link href={"/"} className="flex items-center gap-1 z-40">
        <Image
          src={"/logo.png"}
          alt="techpulse logo"
          width={500}
          height={500}
          className="w-7 h-7"
        />
        <p className="text-lg">Techpulse</p>
      </Link>

      <div className="flex items-center gap-5 max-md:hidden">
        <div className="flex items-center gap-5 text-lg">
          {navItems.map((item) => (
            <Link href={item.url}>{item.name}</Link>
          ))}
        </div>
        <Link
          href={"/signin"}
          className="flex items-center gap-1 text-lg text-white rounded-full px-6 py-2"
          style={{ backgroundColor: Colors.orange }}
        >
          Sign In <FiUser />
        </Link>
      </div>

      <button onClick={()=> setNavOpen(!navOpen)} className="text-2xl md:hidden z-40">
        {
          navOpen ? <AiOutlineClose /> : <CgMenuRightAlt />
        }       
        
      </button>

      <div className={`md:hidden bg-white h-dvh w-full absolute top-0 left-0 pt-20 flex-col items-center gap-8 px-10 ${navOpen ? "flex" : "hidden"}`}>
        {navItems.map((item) => (
          <Link href={item.url}>{item.name}</Link>
        ))}

        <Link
          href={"/signin"}
          className="flex items-center gap-1 text-lg text-white rounded-full w-full justify-center py-2"
          style={{ backgroundColor: Colors.orange }}
        >
          Sign In <FiUser />
        </Link>
      </div>
    </nav>
  );
}
