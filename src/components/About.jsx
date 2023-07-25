import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Kawã, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I'm a 19 year old college student with a strong interest and passion for technology. I am currently studying the fourth period of Information System, seeking to expand my knowledge and skills in the area of web development.
              Over time, I developed several personal projects that are available on my GitHub, which demonstrate my experience and evolution in this field. My main focus is working with React, Javascript, Typescript and other web tools, always looking to learn new technologies and apply them in my projects.
              I am a dedicated person, self-taught and committed to constantly improving my technical and creative skills. In addition, I am enthusiastic about challenges and I love working in a team to find creative and efficient solutions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About