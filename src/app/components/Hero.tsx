import React from "react";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative container pt-32 ">
  
      <Image
        data-aos="zoom-in-right"
        src="/porfoliopic.png"
        width={200}
        height={200}
        alt="picprofile"
        className="absolute rounded-es-[40px] rounded-se-[40px] rounded-br-[40px] border border-t-8 border-l-4 border-b-2 border-bisque border-amber-100 left-4 sm:left-8 md:left-[180px] top-[120px] sm:top-[150px] md:top-[210px]"
      />
      <div className="container mx-auto grid lg:grid-cols-2 h-[calc(100vh-60px)] px-4 sm:px-8">
        <div className="hidden lg:block"></div>
        <div className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold leading-tight flex justify-center items-center">
          <div className="text-left">
            <p data-aos="fade-down">{`I'm`}</p>
            <p data-aos="fade-up">Rabia</p>
            <p data-aos="fade-down">Rehman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
