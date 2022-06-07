import Link from 'next/link';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ProjectModal from './projectModal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Projects = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    console.log('Modal open');
  }
  function closeModal() {
    setIsOpen(false);
  }
  Modal.setAppElement('#modal');
  Modal.defaultStyles.overlay.backgroundColor = 'rgba(1, 18, 16, 0.85)';

  return (
    <div className='relative'>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Project Modal'
        // preventScroll={modalIsOpen}
      >
        <ProjectModal closeModal={closeModal} />
      </Modal>
      <div className='flex justify-center items-center bg-white py-14'>
        <div className='container mx-auto'>
          <p
            className='
							text-sm
							lg:leading-6
							leading-7
							text-gray-400
              text-center
						'
          >
            Recent works
          </p>
          <h1
            className='
							lg:text-4xl
							text-2xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-3
              text-center
              pb-8
						'
          >
            Projects I have Worked on
          </h1>
          <div className='grid grid-cols-2 gap-8 p-6 bg-pink-50 mb-4'>
            <div className='w-full overflow-hidden' style={{ height: '400px' }}>
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
                explicabo et blanditiis, laborum reiciendis dolore. Nulla autem
                commodi reprehenderit assumenda?
              </p>
              <p className='text-sm leading-7 text-gray-400'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
                explicabo et blanditiis, laborum reiciendis dolore. Nulla autem
                commodi reprehenderit assumenda?
              </p>
              <button
                onClick={openModal}
                className='self-start mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none hover:bg-black font-medium leading-none text-white py-4 px-8 bg-primary flex items-center transition-colors'
              >
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
          <div className='grid grid-cols-3 gap-4'>
            <div className='p-6 bg-teal-50'>
              <div
                className='w-full overflow-hidden'
                style={{ height: '225px' }}
              >
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
              <div
                className='w-full overflow-hidden'
                style={{ height: '225px' }}
              >
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
              <div
                className='w-full overflow-hidden'
                style={{ height: '225px' }}
              >
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

          <div className='flex flex-col items-center justify-center'>
            <Link href='/projects'>
              <div className='cursor-pointer sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none hover:bg-black font-medium leading-none text-white hover:text-secondary py-4 px-8 bg-primary flex items-center transition-colors'>
                <p>Explore all projects</p>
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
                      stroke='#0BA358'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10 10.6667L12.6667 8'
                      stroke='#0BA358'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10 5.33301L12.6667 7.99967'
                      stroke='#0BA358'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
