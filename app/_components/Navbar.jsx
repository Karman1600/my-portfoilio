"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { HiHomeModern } from "react-icons/hi2";
import { RxHome } from "react-icons/rx";
import { FcAbout } from "react-icons/fc";
import { SiAboutdotme } from "react-icons/si";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="sticky top-0">
      <nav className="text-white p-3">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <a href="/" className="text-xl font-bold">
            {/* <img src="logo.png" className="h-auto max-w-xs w-56" alt="" /> */}
            <h2 className="text-center justify-center mt-2 text-4xl transition-all font-mono hover:delay-150">Karmnapartap's Portfolio</h2>

          </a>

          <button
            onClick={toggleMenu}
            className="text-white inline-block md:hidden"
          >
            {/* Hamburger Icon */}
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            </svg>
          </button>
          <ul
            className={`${
              isOpen ? "hidden" : "block"
            } flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 gap-7`}
          >
            {["/", "/about", "/contact"].map((path) => (
              <li
                key={path}
                className={router.pathname === path ? "bg-white p-2" : "p-2"}
              >
                <Link href={path}>
                  {path === "/" ? (
                    // <Image
                    //   src="/home.png"
                    //   width={20}
                    //   height={20}
                    //   className="h-10 ease-in-out duration-300 w-10 hover:w-12 hover:h-12 "
                    //   alt="Home"
                    // />
                    <h2 className={`text-center justify-center mt-2 text-2xl transition-all font-extralight hover:underline hover:delay-150 `}>{router.pathname}Home</h2>
                    // <RxHome className="h-10 ease-in-out duration-300 w-10 text-black hover:w-16 hover:h-16" size={50}/>
                  ) : path === "/about" ? (
                    // <Image
                    // src="/about.png"
                    // width={20}
                    // height={20}
                    //   className="h-10 ease-in-out duration-300 w-10 hover:w-12 hover:h-12"
                    //   alt="About"
                    // />
                    <h2 className="text-center justify-center mt-2 text-2xl transition-all font-extralight hover:underline hover:delay-150">{router.pathname}About</h2>

                    // <SiAboutdotme className="h-10 ease-in-out duration-300 w-10 text-black hover:w-16 hover:h-16" size={50} />
                  ) : path === "/resume" ? (
                    // <Image
                    // src="/project.png"
                    // width={20}
                    // height={20}
                    //   className="h-10 ease-in-out duration-300 w-10 hover:w-12 hover:h-12"
                    //   alt="Projects"
                    // />
                    <h2 className="text-center justify-center mt-2 text-2xl transition-all font-extralight hover:underline hover:delay-150">Resume</h2>

                  ) : path === "/contact" ? (
                    // <Image
                    // src="/contact.png"
                    // width={20}
                    // height={20}
                    //   className="h-10 ease-in-out duration-300 w-10 hover:w-12 hover:h-12"
                    //   alt="Contact"
                    // />
                    <h2 className="text-center justify-center mt-2 text-2xl transition-all font-extralight hover:underline hover:delay-150">Contact Me</h2>

                  ) : (
                    path.substring(1).charAt(0).toUpperCase() + path.slice(2)
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="flex h-0.5 bg-white mt-2"></div>
    </div>
  );
}

export default Navbar;
