import React from 'react';
function Footer() {
  return (
    <>
      <div className='bg-linear-pink-invert pb-12'>
        <div className='mx-auto container pt-20 flex flex-col items-center justify-center'>
          <div className='text-black flex flex-col md:items-center f-f-l pt-3'>
            <h1 className='text-xl font-medium'>
              Developing Apps that are made to Impress
            </h1>
            <div className='md:flex items-center mt-5 text-base text-color f-f-l'>
              <h2 className=' md:mr-6 pb-4 md:py-0 cursor-pointer'>
                <a
                  href='https://www.linkedin.com/in/prathmeshsadake/'
                  target='_blank'
                >
                  Linkedin
                </a>
              </h2>
              <h2 className='cursor-pointer'>
                <a href='https://github.com/PrathmeshSadake' target='_blank'>
                  Github
                </a>
              </h2>
            </div>
            <div className='my-6 text-base text-color f-f-l'>
              <ul className='md:flex items-center'>
                <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0'>About</li>
                <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0'>
                  <a href='https://github.com/PrathmeshSadake' target='_blank'>
                    Projects
                  </a>
                </li>
                {/* <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0'>Blogs</li> */}
                <li className=' md:mr-6 cursor-pointer pt-4 lg:py-0'>
                  <a href='mailto:prathmeshsadake@gmail.com'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-9/12  h-0.5 bg-gray-100 rounded-full' />
          <div className='flex justify-between items-center pt-12'>
            <div className='text-sm text-color mb-10 f-f-l'>
              <p> © 2022 Prathmesh Sadake</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
