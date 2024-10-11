import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-100'>
      <div className='container py-8'>
        <div className='flex justify-between'>
          <h3>Trendzy</h3>
          <nav>
            <ul className='flex gap-8'>
              <li>
                <Link className='underline' href='/'>
                  Home
                </Link>
              </li>
              <li>
                <a className='underline' href='#products'>
                  Shop
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='bg-slate-500 h-[0.5px] opacity-70 w-full my-10' />
        <p className='text-sm text-center'>
          © {currentYear} Trendzy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
