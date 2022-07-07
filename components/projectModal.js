import React from 'react';

const ProjectModal = ({ closeModal }) => {
  return (
    <div className='bg-white container mx-auto max-w-lg'>
      <div className='flex justify-end items-end p-3'>
        <svg
          onClick={closeModal}
          className='lg:mr-0 md:mr-0 -mr-2 cursor-pointer'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.5909 12L18.0441 7.54687C18.2554 7.3359 18.3743 7.04961 18.3745 6.75099C18.3748 6.45237 18.2564 6.16587 18.0455 5.95453C17.8345 5.74319 17.5482 5.62431 17.2496 5.62404C16.951 5.62378 16.6645 5.74215 16.4531 5.95312L12 10.4062L7.54687 5.95312C7.33553 5.74178 7.04888 5.62305 6.75 5.62305C6.45111 5.62305 6.16447 5.74178 5.95312 5.95312C5.74178 6.16447 5.62305 6.45111 5.62305 6.75C5.62305 7.04888 5.74178 7.33553 5.95312 7.54687L10.4062 12L5.95312 16.4531C5.74178 16.6645 5.62305 16.9511 5.62305 17.25C5.62305 17.5489 5.74178 17.8355 5.95312 18.0469C6.16447 18.2582 6.45111 18.3769 6.75 18.3769C7.04888 18.3769 7.33553 18.2582 7.54687 18.0469L12 13.5937L16.4531 18.0469C16.6645 18.2582 16.9511 18.3769 17.25 18.3769C17.5489 18.3769 17.8355 18.2582 18.0469 18.0469C18.2582 17.8355 18.3769 17.5489 18.3769 17.25C18.3769 16.9511 18.2582 16.6645 18.0469 16.4531L13.5909 12Z'
            fill='#4B5563'
          />
        </svg>
      </div>
      <div className='flex justify-center items-center px-4'>
        <img
          className='w-full object-fill object-center'
          src='https://tuk-cdn.s3.amazonaws.com/can-uploader/pexels-karolina-grabowska-5650050%201.png'
          alt='black-friday-sale'
        />
      </div>
      <div className='mt-8'>
        <p className='lg:text-3xl text-center font-medium lg:leading-9 text-gray-800 lg:mb-4 md:mb-2 md:text-3xl text-2xl md:leading-loose mb-2'>
          Facebook Friend Recommendation using Graph Mining
        </p>
        <p className='lg:text-base md:text-base text-sm md:tracking-wider lg:tracking-normal leading-normal text-center text-gray-600 lg:block md:block hidden'>
          Be first to hear about our special offers, new arrivals and much
          <br />
          more. Subscribe to our newsletter
        </p>
        <p className='text-sm text-center text-gray-600 lg:hidden md:hidden block'>
          Be first to hear about our special offers, new arrivals and much more.
          Subscribe to our <br />
          newsletter
        </p>
      </div>
      <div className='flex justify-center items-center mt-4 w-full px-4'>
        <button className='text-base font-medium text-center leading-none text-black py-4 lg:w-full md:w-full w-full bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out'>
          View More
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
