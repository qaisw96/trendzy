import React from 'react';
import Image from 'next/image';

const IMAGE_URL =
  'https://adorn.qodeinteractive.com/wp-content/uploads/2017/05/slider-h5-img-3.jpg';

const Banner = () => {
  return (
    <div className='relative animate-fade-in-up'>
      <Image
        src={IMAGE_URL}
        alt='Banner'
        width={500}
        height={500}
        layout='responsive'
        className='w-full min-h-[300px]'
      />
      <div className='absolute top-0 left-0 h-full flex gap-2 md:gap-6 flex-col justify-center p-8 bg-opacity-75 m-0 lg:ml-20 lg:mt-20'>
        <h2 className='text-2xl md:text-5xl font-light text-gray-700'>
          WELCOME to TRENDZY
        </h2>
        <p className='mt-2 text-md md:text-xl max-w-[500px] text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non
          dolorem impedit hic dolores, voluptatem odit.
        </p>
        <a href='#products' className='underline text-gray-500'>
          SHOP NOW
        </a>
      </div>
    </div>
  );
};

export default Banner;
