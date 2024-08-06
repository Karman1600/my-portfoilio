import React from 'react'

function page() {
  return (
    <div className="justify-center m-auto align-center">
    <div className="flex flex-col h-5/6" id="about">
      <div className="flex ml-10 align-center text-center font-bold text-5xl mt-8 ">
        Resume
      </div>
      <iframe className="justify-center items-center m-auto" src="/resume.pdf" width="1080px" height="600px"></iframe>
    </div>
  </div>
  )
}

export default page
