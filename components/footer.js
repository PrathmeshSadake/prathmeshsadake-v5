import React from 'react';
function Footer() {
  return (
    <div className='py-8 pt-12 mx-auto container'>
      <div className='grid grid-cols-7'>
        <div className='col-span-3 text-white flex flex-col md:items-start pt-3'>
          <p className='text-3xl font-light mt-5 flex items-center'>
            Have an idea, tell me about it!
          </p>
          <a
            href='mailto:prathmeshsadake@gmail.com'
            style={{ borderBottom: '1px dotted' }}
            className='text-xl font-medium mt-3 text-secondary border-secondary'
          >
            prathmeshsadake@gmail.com
          </a>
        </div>
        <div className='col-span-2 text-base text-gray-200'>
          <ul className='md:flex flex-col items-start'>
            <li className='cursor-pointer hover:text-secondary transition ease-in-out'>
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
        <div className='col-span-2 text-base text-gray-200'>
          <ul className='md:flex flex-col items-start'>
            <li className='cursor-pointer hover:text-secondary transition ease-in-out'>
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
            class='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='#04AB5C'
            stroke-width='1'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M5 15l7-7 7 7'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Footer;
