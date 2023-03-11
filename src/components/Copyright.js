<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> 7ee4349dbe73d137c913237e1965a72e5bf26a90

// import copyright data
import { copyrightData } from "../data";

const Copyright = () => {
  // destructure copyright data
  const { text, icon } = copyrightData;
  return (
    <section className="mt-24 pb-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center md:text-left  lg:flex-row justify-between gap-y-8">
          {/* text */}
          <div className="text-sm font-light italic max-w-[360px]">{text}</div>
          {/* icon */}
<<<<<<< HEAD
          <div className="-order-1 md:order-1">
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-accent-primary/20 cursor-pointer group">
              <div className="text-3xl text-accent-primary group-hover:scale-110 transition-all">
=======
          <div className='-order-1 md:order-1'>
            <div className='w-[60px] h-[60px] flex items-center justify-center rounded-full bg-accent-primary/20 cursor-pointer group'>
              <a href="/qna/#top">
              <div className='text-3xl text-accent-primary group-hover:scale-110 transition-all'>
>>>>>>> 7ee4349dbe73d137c913237e1965a72e5bf26a90
                {icon}
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
