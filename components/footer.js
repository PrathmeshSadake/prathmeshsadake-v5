import React from 'react';
function Footer() {
  return (
    <div className='md:py-12 mx-auto container p-5 md:p-0'>
      <div className='grid grid-cols-1 lg:grid-cols-7 gap-4'>
        <div className='col-span-3 text-white flex flex-col md:items-start'>
          <p className='text-3xl font-light flex items-center'>Get in touch</p>
          <p className='text-sm font-light w-3/4 my-3 text-gray-300'>
            My inbox is always open. Whether you have a question or just want to
            say hi, I&#39;ll try my best to get back to you!
          </p>
          <a
            href='mailto:prathmeshsadake@gmail.com'
            className='text-xl font-medium mt-3 text-secondary border-secondary lg:border-b-secondary'
          >
            prathmeshsadake@gmail.com
          </a>
        </div>
        <div className='col-span-2 text-base text-gray-300'>
          <ul className='grid grid-cols-2 md:flex flex-col items-start'>
            <li className='cursor-pointer hover:text-secondary transition ease-in-out pt-5'>
              About
            </li>
            <li className='cursor-pointer hover:text-secondary transition ease-in-out pt-5'>
              <a
                href='https://github.com/PrathmeshSadake'
                target='_blank'
                rel='noreferrer'
              >
                Projects
              </a>
            </li>
            <li className='cursor-pointer hover:text-secondary transition ease-in-out pt-5'>
              Blogs
            </li>
            <li className='cursor-pointer hover:text-secondary transition ease-in-out pt-5'>
              <a href='mailto:prathmeshsadake@gmail.com'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='col-span-2 text-base text-gray-300'>
          <ul className='grid grid-cols-2 md:flex flex-col items-start'>
            <li className='cursor-pointer hover:text-secondary transition ease-in-out pt-5'>
              <a
                href='https://www.linkedin.com/in/prathmeshsadake/'
                target='_blank'
                rel='noreferrer'
              >
                Linkedin
              </a>
            </li>
            <li className='cursor-pointer hover:text-secondary transition ease-in-out pt-5'>
              <a
                href='https://github.com/PrathmeshSadake'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
            <li className='cursor-pointer hover:text-secondary transition ease-in-out pt-5'>
              <a
                href='https://www.instagram.com/prxthmesh'
                target='_blank'
                rel='noreferrer'
              >
                Instagram
              </a>
            </li>
            <li className='cursor-pointer hover:text-secondary transition ease-in-out pt-5'>
              <a
                href='https://www.facebook.com/PrathmeshSadake'
                target='_blank'
                rel='noreferrer'
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between items-center pt-5'>
        <div className='text-sm text-color f-f-l'>
          <p> © 2022. Developed by Prathmesh Sadake</p>
        </div>
      </div>
      <div className='flex justify-center items-center pt-28'>
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
          id='scrollToTopBtn'
          className='transition ease-in-out border-2 border-gray-300 hover:border-secondary p-2 rounded-full cursor-pointer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='#04AB5C'
            strokeWidth='1'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 15l7-7 7 7'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Footer;
