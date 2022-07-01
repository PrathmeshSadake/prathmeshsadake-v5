import React from 'react';

const ProjectsPage = () => {
  const colors = ['bg-fuchsia-50', 'bg-teal-50', 'bg-pink-50', 'bg-blue-50'];
  return (
    <div className='bg-white'>
      <div className='container mx-auto py-10'>
        <h3 className='text-4xl font-semibold leading-9 mt-3 mb-12 text-gray-800'>
          Some Things I&apos;ve Built
        </h3>

        {[1, 2, 3, 4, 5, 6, 7]
          .filter((val, idx) => idx < 3)
          .map((el, idx) => (
            <div key={idx} className={`grid grid-cols-2 gap-8 p-10 ${colors[idx]} my-10`}>
              <div
                className={`${
                  idx % 2 === 0 ? 'order-last' : ''
                } w-full overflow-hidden`}
                style={{ height: '400px' }}
              >
                <img
                  src='https://source.unsplash.com/QQhAQHWvTYk'
                  className='h-full w-full object-cover hover:scale-110 transition-all duration-300 ease-out cursor-pointer'
                  alt=''
                />
              </div>
              <div className='flex flex-col justify-center'>
                <p className='text-sm leading-7 text-gray-400 mt-3'>Featured</p>
                <h4 className='text-2xl font-semibold leading-7	text-gray-800 mt-3'>
                  Facebook Friend Recommendation using Graph Mining
                </h4>
                <p className='text-sm leading-7 text-gray-400 mt-3'>
                  Machine Learning | 6 Dec 2021
                </p>

                <p className='text-sm leading-7 text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error explicabo et blanditiis, laborum reiciendis dolore.
                  Nulla autem commodi reprehenderit assumenda?
                </p>
                <p className='text-sm leading-7 text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error explicabo et blanditiis, laborum reiciendis dolore.
                  Nulla autem commodi reprehenderit assumenda?
                </p>
                <button className='self-start mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none hover:bg-black font-medium leading-none text-white py-4 px-8 bg-primary flex items-center transition-colors'>
                  <a>Learn More About This Project</a>
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
                        stroke='#fff'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M10 10.6667L12.6667 8'
                        stroke='#fff'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M10 5.33301L12.6667 7.99967'
                        stroke='#fff'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          ))}
        <h3 className='text-4xl font-semibold leading-9 mt-24 text-gray-800 text-center'>
          Other Noteworthy Projects
        </h3>
        <p className='text-gray-500 mb-12 font-extralight text-center'>
          A big list of things I&apos;ve worked on
        </p>
        <div className='grid grid-cols-3 gap-4'>
          <div className='p-6 bg-teal-50'>
            <div className='w-full overflow-hidden' style={{ height: '225px' }}>
              {' '}
              <img
                src='https://source.unsplash.com/RQ8zOzo-x_k'
                className='h-full w-full object-cover hover:scale-110 transition-all duration-300 ease-out cursor-pointer'
                alt=''
              />
            </div>

            <p className='text-sm leading-7 text-gray-400 mt-3'>
              Machine Learning
            </p>
            <p className='text-sm leading-7 text-gray-400'>6 Dec 2021</p>
            <h4 className='text-2xl font-semibold leading-7	text-gray-800 mt-3'>
              Netflix Movie Recommendation System (Collaborative based
              recommendation)
            </h4>
            <p className='text-sm leading-7 text-gray-400'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              explicabo et blanditiis, laborum reiciendis dolore. Nulla autem
              commodi reprehenderit assumenda?
            </p>
          </div>
          <div className='p-6 bg-blue-50'>
            <div className='w-full overflow-hidden' style={{ height: '225px' }}>
              <img
                src='https://source.unsplash.com/1uQe5BIiH8w'
                className='h-full w-full object-cover hover:scale-110 transition-all duration-300 ease-out cursor-pointer'
                alt=''
              />
            </div>

            <p className='text-sm leading-7 text-gray-400 mt-3'>
              Machine Learning
            </p>
            <p className='text-sm leading-7 text-gray-400'>6 Dec 2021</p>
            <h4 className='text-2xl font-semibold leading-7	text-gray-800 mt-3'>
              Microsoft Malware Detection
            </h4>
            <p className='text-sm leading-7 text-gray-400'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              explicabo et blanditiis, laborum reiciendis dolore. Nulla autem
              commodi reprehenderit assumenda?
            </p>
          </div>{' '}
          <div className='p-6 bg-red-50'>
            <div className='w-full overflow-hidden' style={{ height: '225px' }}>
              {' '}
              <img
                src='https://source.unsplash.com/qp51FQhBnS0'
                className='h-full w-full object-cover hover:scale-110 transition-all duration-300 ease-out cursor-pointer'
                alt=''
              />
            </div>

            <p className='text-sm leading-7 text-gray-400 mt-3'>MERN Stack</p>
            <p className='text-sm leading-7 text-gray-400'>6 Dec 2021</p>
            <h4 className='text-2xl font-semibold leading-7	text-gray-800 mt-3'>
              Full Stack MERN Social Media App with Auth, Pagination, Comments
            </h4>
            <p className='text-sm leading-7 text-gray-400'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              explicabo et blanditiis, laborum reiciendis dolore. Nulla autem
              commodi reprehenderit assumenda?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
