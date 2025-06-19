import React from 'react';
import Pic from "../Hero/Pic.jpeg"
const Hero = () => {
  return (
    <section className="text-gray-600 body-font transition-colors duration-300">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-blue-50">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black ">
          Hello,
            <br className="hidden lg:inline-block" />
           
          </h1>
          <h2>
            I am Sourav Kumar
          </h2>
          <br />
          <h3 className=' text-black text-2xl'>
           With the aim to become DATA SCIENTIST OR SOFTWARE DEVELOPER in future.
         
          </h3>
          <br />
          <p className="mb-8 leading-relaxed text-black">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic turmeric truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Hire Me
            </button>
         
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full shadow-2xl bg-gray-400"
            alt="hero"
            src={Pic}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;