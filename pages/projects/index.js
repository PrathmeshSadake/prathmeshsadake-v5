import React from 'react';
import Projects from '../../components/projects';

const ProjectsPage = () => {
  return (
    <div className='container mx-auto'>
      <h3 className='text-4xl font-semibold leading-9 mt-3 mb-12 text-gray-800'>
        Projects
      </h3>
      <div class='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {[1, 2, 3, 4].map(() => (
          <div className='relative'>
            <div>
              <p className='md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0'>
                12 April 2021
              </p>
              <div className='absolute bottom-0 left-0 md:p-10 p-6'>
                <h2 className='text-xl font-semibold 5 text-white'>
                  The Decorated Ways
                </h2>
                <p className='text-base leading-4 text-white mt-2'>
                  Dive into minimalism
                </p>
                <div className='flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline'>
                  <p className='pr-2 text-sm font-medium leading-none'>
                    Check out
                  </p>
                  <svg
                    className='fill-stroke'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.75 12.5L10.25 8L5.75 3.5'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
            </div>
            <img
              src='https://i.ibb.co/Ms4qyXp/img-3.png'
              alt='sitting place'
              className='w-full hidden sm:block'
            />
            <img
              className='w-full sm:hidden'
              src='https://i.ibb.co/6XYbN7f/Rectangle-29.png'
              alt='sitting place'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
