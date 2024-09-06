import React from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";
import { TfiLayoutMenuV } from "react-icons/tfi";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import Image from "../assets/image.jpg"
import { motion } from "framer-motion"


const index = () => {
  return (
    <div className='relative mainbg pb-[10%] pt-10'>
      <div className='flex flex-row justify-center'>
          <motion.div initial={{scale:0.2 }} animate={{scale:1}} transition={{delay:0.1, duration:0.3}}  className='w-[700px] h-[630px] p-10 bgleftside  mt-12 rounded-2xl shadow-2xl shadow-black'></motion.div>
          <motion.div initial={{scale:0.2 }} animate={{scale:1}} transition={{delay:0.1, duration:0.3}} className='w-[600px] h-[300px] bgrightside ml-6 mt-10 rounded-2xl shadow-black shadow-2xl'>
              <FaRegQuestionCircle className='text-gray-400 text-xl absolute top-[105px] ml-3 cursor-help'/>
              <TfiLayoutMenuV className='text-gray-400 text-xl absolute top-[230px] ml-3 cursor-pointer' />
                <ul className='w-[500px] h-11 bg-black flex flex-row text-white text-center mx-14 justify-around  mt-4 rounded-2xl hover:shadow-2xl hover:shadow-black  hover:duration-500 hover:delay-75 cursor-pointer  '>
                  <li className='hover:bg-gray-700 hover:w-[180px] hover:h-[30px] text-gray-400 hover:text-white hover:-translate-x-4 hover:rounded-xl mt-2 hover:duration-500 cursor-pointer focus:ring-4 shadow-lg transform active:scale-75 transition-transform ' >About Me</li>
                  <li className='hover:bg-gray-700 hover:w-[180px] hover:h-[30px] text-gray-400 hover:text-white hover:rounded-xl mt-2 hover:duration-500 cursor-pointer focus:ring-4 shadow-lg transform active:scale-75 transition-transform'> Experiences</li>
                  <li className='hover:bg-gray-700 hover:w-[180px] hover:h-[30px] text-gray-400 hover:text-white hover:translate-x-6 hover:rounded-xl mt-2 hover:duration-500 cursor-pointer focus:ring-4 shadow-lg transform active:scale-75 transition-transform' >Recommended</li>
                </ul>
                <div className='w-[500px] h-52 ml-14' >
                  <p className='mt-6 text-gray-400'>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. </p>
                  <p className='mt-10 text-gray-400'>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
                 </div>
                 <div className='w-[80%] h-1 bgrightside rounded-full mt-8 ml-16'></div>
                <div className='w-[600px] h-[300px] bgrightside p-10 mt-5 rounded-2xl shadow-black shadow-2xl '>
                    <FaRegQuestionCircle className='text-gray-400 text-xl absolute top-[455px] -ml-7 cursor-help '/>
                    <TfiLayoutMenuV className='text-gray-400 text-xl absolute top-[600px] -ml-7 cursor-pointer' />
                    <ul className='w-full h-7 flex flex-row -mt-1 '>
                      <li className='bg-black text-white -mt-4 text-center py-2 px-8 rounded-2xl cursor-pointer focus:ring-4 shadow-lg transform active:scale-75 transition-transform' >Gallary</li>
                      <li className='border-transparent text-white text-center w-32 -mt-5 pt-4 shadow-black rounded-full text-xs ml-[180px] cursor-pointer focus:ring-4 shadow-md transform active:scale-75 transition-transform'>+ ADD IMAGE</li>
                      <li><IoArrowBackCircleSharp className='text-black text-opacity-65 rounded-full text-4xl ml-5 -mt-3 cursor-pointer shadow-black focus:ring-4 shadow-lg transform active:scale-75 transition-transform'/></li>
                      <li><IoArrowForwardCircle className='text-black text-opacity-65 rounded-full text-4xl ml-5 -mt-3 cursor-pointer shadow-black focus:ring-4 shadow-lg transform active:scale-75 transition-transform'/></li>
                    </ul>
                  <div className='h-52 flex flex-row justify-around' >
                    <img src={Image} alt="img1" className='rounded-3xl mt-10'/>
                    <img src={Image} alt="img2"  className='rounded-3xl mt-10' />
                    <img src={Image} alt="img3"  className='rounded-3xl mt-10' />
                  </div>
                </div>
                <div className='w-[80%] h-1 bgrightside rounded-full mt-6 ml-16'></div>
            </motion.div>
      </div>
    </div>
  )
}

export default index
