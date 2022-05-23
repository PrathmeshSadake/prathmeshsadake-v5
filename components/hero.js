import React from 'react';

const Hero8 = () => {
  return (
    <div className='flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container'>
      <div className='z-30 relative lg:w-1/2'>
        <div className='hidden bg-gray-100 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center'>
          <div className='w-full lg:w-auto lg:-mr-32'>
            <img
              src='https://source.unsplash.com/JdoofvUDUwc'
              alt='mobile image with developer text'
              className='w-full relative z-30 lg:pl-20 px-6 py-14'
            />
          </div>
        </div>
        <div className='absolute top-0 bg-gray-100 md:h-96 w-full hidden md:block lg:hidden'></div>
        <div className='w-full h-full lg:hidden'>
          <img
            src='https://source.unsplash.com/JdoofvUDUwc'
            alt='mobile image with developer text'
            className='w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14'
          />
        </div>
      </div>
      <div className='bg-gray-100 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center'>
        <div>
          <p className=' md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-2'>
            Hello 👋, my name is
          </p>
          <h1 className=' md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full sm:text-5xl text-4xl font-semibold text-gray-800 capitalize'>
            Prathmesh Sadake
          </h1>

          <p className='md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-2xl leading-normal text-gray-600 mt-2'>
            Developing Apps that are made to Impress.
          </p>
          <p className='md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5'>
            I&apos;m a full-stack engineer. I can create client-facing apps and
            websites with cutting-edge back-end support.
          </p>
          <button className='sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center'>
            <a href='#about'>Explore about me</a>
            <div className='ml-2 mt-0.5'>
              <svg
                className='fill-stroke'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.33325 8H12.6666'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M10 10.6667L12.6667 8'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M10 5.33301L12.6667 7.99967'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero8;
