import React, { useState } from 'react';
function Index() {
  const [show, setShow] = useState(false);
  return (
    <div className='py-12 bg-gray-100 overflow-y-hidden'>
      {/* Code block starts */}
      <dh-component>
        <nav className='w-full'>
          <div className='container mx-auto px-6 flex items-center justify-between'>
            <div className='flex items-center' aria-label='Home' role='img'>
              <img
                className='cursor-pointer w-8 sm:w-auto'
                src='https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg1.svg'
                alt='logo'
              />
              <p className='ml-2 lg:ml-4 text-base lg:text-2xl font-bold text-gray-800'>
                The North
              </p>
            </div>
            <div>
              <button
                onClick={() => setShow(!show)}
                className='sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'
              >
                <img
                  className='h-8 w-8'
                  src='https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg4.svg'
                  alt='show'
                />
              </button>
              <div
                id='menu'
                className={`md:block lg:block ${show ? '' : 'hidden'}`}
              >
                <button
                  onClick={() => setShow(!show)}
                  className='block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-30 top-0 mt-3'
                >
                  <img
                    className='h-8 w-8'
                    src='https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg5.svg'
                    alt='hide'
                  />
                </button>
                <ul className='flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20'>
                  <li className='text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0'>
                    <a href='javascript:void(0)'>Company</a>
                  </li>
                  <li className='text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0'>
                    <a href='javascript:void(0)'>Features</a>
                  </li>
                  <li className='text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0'>
                    <a href='javascript:void(0)'>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className='w-full px-6'>
          <div className='mt-8 relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64'>
            <img
              className='mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0'
              src='https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg'
              alt='bg'
            />
            <img
              className='ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0'
              src='https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg'
              alt='bg'
            />
            <div className='w-11/12 sm:w-2/3 mb-5 sm:mb-10'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight'>
                The Freedom to Create the Pages You Want
              </h1>
            </div>
            <div className='flex justify-center items-center mb-10 sm:mb-20'>
              <button className='hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm'>
                Get Started
              </button>
              <button className='hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm'>
                Learn More
              </button>
            </div>
          </div>
          <div className='container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40'>
            <div className='relative sm:w-2/3 w-11/12'>
              <img
                src='https://tuk-cdn.s3.amazonaws.com/assets/components/hero/h_2.png'
                alt='Sample Page'
                role='img'
              />
            </div>
          </div>
        </div>
      </dh-component>
      {/* Code block ends */}
    </div>
  );
}

export default Index;
