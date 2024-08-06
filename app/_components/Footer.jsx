import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 mb-4'>
    <div className="flex h-0.5 bg-white mt-3"></div>
    <p className=' bg-black w-screen m-auto align-center text-center text-bold justify-center mt-4'>Copyright © Karmanpartap Singh Sidhu.</p>
    <p className=' bg-black w-screen m-auto align-center text-center text-bold justify-center'>Get in Contact <a className='text-pink-300 underline underline-offset-2 ' href='https://github.com/karman1600'>Github</a><a className='text-blue-500 underline ml-2 underline-offset-2 ' href='https://www.linkedin.com/in/karmansidhu/'>Linkedin</a></p>
    {/* https://www.linkedin.com/in/karmansidhu/ */}
    </div>
  )
}   

export default Footer