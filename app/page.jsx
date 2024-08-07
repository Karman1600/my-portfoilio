"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    setOnLoad(true);
  }, []);

  return (
    <div className={`flex flex-row ${onLoad? "-translate-y-0 duration-1000 transition-all ease-in-out opacity-100 size-full" : "opacity-30 translate-y-14 size-0"} `}>
      <img
        className="flex mt-24 ml-20 rounded-full mr-20 border-4 border-white h-1/4 w-1/4"
        src="/myself.jpg"
        alt="Myself"
      />
      <div className="flex rounded h-full overflow-hidden shadow-lg mt-44 mb-72">
        <div className="px-0 py-0">
          <p className="flex font-poppins mb-5 text-3xl justify-start">
            Software Developer
          </p>
          <p className="flex font-poppins text-3xl justify-start">
            {/* at Southern Alberta Institute of Technology, Calgary */}
          </p>
          <h1 className="flex text-7xl mb-5 mt-auto justify-start">
            Hi, I'm{" "}
            <span className="text-red-500 font-medium">
              &nbsp;Karmanpartap Singh Sidhu{" "}
            </span>
          </h1>
          <p className="flex text-gray-100 text-2xl text-10 w-3/4 mt-10 justify-center">
            Hey there! I'm Karmanpartap Singh Sidhu, currently diving deep into
            the world of software development as a student at SAIT Calgary. My
            passion lies in turning cool ideas into real, working software that
            can make a difference.
          </p>
        </div>
      </div>
    </div>
  );
}
