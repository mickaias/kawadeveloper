import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mickaias Kawã</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a FrontEnd Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          My name is Mickaias kawã, I'm a student of Information System, and Front-end developer,
          I'm passionate about programming and I have experience in React, JavaScript, Next, Typescript,
          Nodejs, TailwindCss, Git, HTML and CSS. I'm a dedicated person and I really like challenges, I love every programming
          experience, and I love learning more and more about programming, I'm always eager to improve!
        </p>
        <div>
          <button id='work' className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home