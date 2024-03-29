import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import CV from '../assets/cv-kawa.pdf'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-2xl font-bold '>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mickaias Kawã</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a FrontEnd Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I'm passionate about technology
        </p>
        <div>
          <button id='work' className='text-white group border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-pink-600'>
            <a className='font-bold ' href={CV} download>Currículo</a>
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