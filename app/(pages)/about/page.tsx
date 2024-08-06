import React from "react";

function page() {
  return (
    <div className="flex flex-col h-98" id="about">
      {/* <div className="flex h-0.5 bg-white mt-1"></div> */}
      <div className="flex ml-28 align-center text-center font-bold text-5xl mt-20 ">
        About Me
      </div>
      <p className="flex text-lg ml-96 w-7/12 mt-20">
        Hey there! I'm Kamanpartap Singh Sidhu, currently diving deep into the world of
        software development as a student at SAIT Calgary. My passion lies in
        turning cool ideas into real, working software that can make a
        difference. I've been fortunate to work on some exciting projects, like
        a file-sharing website and an employee dashboard, using tools like
        Next.js and Tailwind CSS. These experiences have given me a solid grasp
        of both front-end and back-end development.
        <br/>
        <br/>
         I'm particularly interested
        in cloud computing and app development. I love tackling complex problems
        and finding innovative solutions. Staying updated with the latest tech
        trends is a big part of my life because there's always something new to
        learn. Outside of coding, you'll find me exploring the latest gadgets,
        reading about the future of tech, or discussing the potential of quantum
        networking. 
        <br/>
        <br/>
        
        I've also worked in security services and sales, which has
        helped me develop strong problem-solving and people skills. Thanks for
        stopping by my portfolio. I hope you enjoy checking out my work as much
        as I enjoyed creating it!
      </p>
    </div>
  );
}

export default page;
