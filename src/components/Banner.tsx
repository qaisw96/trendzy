import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/motion/motionSettings';

const imageUrl =
  'https://adorn.qodeinteractive.com/wp-content/uploads/2017/05/slider-h5-img-3.jpg';

const Banner = () => {
  return (
    <motion.section {...fadeInUp} className='relative'>
      <Image
        src={imageUrl}
        alt='Banner'
        width={500}
        height={500}
        layout='responsive'
        className='w-full min-h-[400px]'
      />
      <div className='absolute top-0 left-0 h-full flex gap-6 flex-col justify-center p-8 bg-opacity-75 m-0 lg:ml-20 lg:mt-20'>
        <h2 className='text-5xl font-light text-gray-700'>
          WELCOME to TRENDZY
        </h2>
        <p className='mt-2 text-xl max-w-[500px] text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non
          dolorem impedit hic dolores, voluptatem odit.
        </p>
        <a href='#products' className='underline text-gray-500'>
          SHOP NOW
        </a>
      </div>
    </motion.section>
  );
};

export default Banner;
