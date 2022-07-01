import React from 'react';

const Cta = () => {
  return (
    <div className='bg-white py-10'>
      <div className='container p-5 md:p-0 mx-auto'>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-10'>
          <div className='lg:col-span-2 sm:w-auto flex flex-col justify-center items-start'>
            <div>
              <p className='text-3xl xl:text-4xl font-semibold leading-9 text-gray-800'>
                I have a Blog.
              </p>
            </div>
            <div className='mt-4 lg:w-4/5 xl:w-3/5'>
              <p className='text-base leading-6 text-gray-600'>
                Your Technical Knowledge Needs to get stronger and I have the
                ideas ready!
              </p>
            </div>
            <div className='mt-6 w-full'>
              <a href='https://medium.com/@prathmeshsadake' target={'_blank'} rel='noreferrer' className='px-4 bg-primary flex justify-between items-center w-full lg:w-72 h-12 text-white hover:bg-primary'>
                <p className='text-lg font-medium leading-5'>Visit my blog</p>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.66663 16H25.3333'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M20 21.3333L25.3333 16'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M20 10.6667L25.3333 16'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='lg:col-span-3  w-full'>
            <div className='grid grid-cols-2 grid-row-2 gap-x-1'>
              <div className='row-span-2'>
                <img
                  className='w-full h-full object-cover'
                  src='https://source.unsplash.com/JO_S6ewBqAk'
                  alt='laptop'
                />
              </div>
              <div className='grid grid-row-2 gap-y-1'>
                <div>
                  <img
                    className='w-full h-full object-cover'
                    src='https://source.unsplash.com/oyXis2kALVg'
                    alt='laptop'
                  />
                </div>
                <div>
                  <img
                    className='w-full h-full object-cover'
                    src='https://source.unsplash.com/2EJCSULRwC8'
                    alt='laptop'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
