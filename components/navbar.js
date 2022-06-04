import React, { useState } from 'react';
export default function IndexPage() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  return (
    <div className='h-full w-full'>
      {/* Code block starts */}
      <nav className='w-full bg-transparent hidden xl:block shadow'>
        <div className='container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto'>
          <div className='flex items-center'>
            <ul className='hidden xl:flex items-center h-full'>
              <li className='cursor-pointer h-full flex items-center text-sm hover:text-secondary text-white tracking-normal transition duration-150 ease-in-out'>
                1. About
              </li>
              <li className='cursor-pointer h-full flex items-center text-sm hover:text-secondary text-white mx-10 tracking-normal transition duration-150 ease-in-out'>
                2. Experience
              </li>
              <li className='cursor-pointer h-full flex items-center text-sm hover:text-secondary text-white mr-10 tracking-normal transition duration-150 ease-in-out'>
                3. Projects
              </li>
              <li className='cursor-pointer h-full flex items-center text-sm hover:text-secondary text-white tracking-normal transition duration-150 ease-in-out'>
                4. Contact
              </li>
            </ul>
          </div>
          <div className='h-full hidden xl:flex items-center justify-end'>
            <button className='sm:w-auto w-full text-xs justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none hover:bg-gray-300 font-semibold leading-none text-primary py-2 px-3 bg-white flex items-center transition-colors'>
              <a href='#about'>Resume</a>
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
            </button>
          </div>
          <div className='flex items-center xl:hidden'>
            <ul className='p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden'>
              <li className='flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-secondary focus:text-secondary focus:outline-none'>
                <div className='flex items-center'>
                  <span className='ml-2 font-bold'>1. About</span>
                </div>
              </li>
              <li
                className='flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-secondary focus:text-secondary focus:outline-none flex justify-center'
                onClick={() => {}}
              >
                <div className='flex items-center'>
                  <span className='ml-2 font-bold'>2. Experience</span>
                </div>
              </li>
              <li className='flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-secondary flex items-center focus:text-secondary focus:outline-none'>
                <span className='ml-2 font-bold'>3. Projects</span>
              </li>
              <li
                className='border-b border-gray-300 flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-secondary focus:text-secondary focus:outline-none flex justify-center'
                onClick={() => {}}
              >
                <div className='flex items-center'>
                  <span className='ml-2 font-bold'>4. Contact</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar */}
      <nav>
        <div className='py-4 px-6 w-full flex xl:hidden justify-between items-center bg-primary fixed top-0 z-40'>
          <div className='w-24'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={43}
              height={44}
              viewBox='0 0 43 44'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z'
                fill='#04AB5C'
              />
            </svg>
          </div>
          <div>
            <div
              id='menu'
              className='text-white'
              onClick={() => setShow(!show)}
            >
              {show ? (
                ' '
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-menu-2'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <line x1={4} y1={6} x2={20} y2={6} />
                  <line x1={4} y1={12} x2={20} y2={12} />
                  <line x1={4} y1={18} x2={20} y2={18} />
                </svg>
              )}
            </div>
          </div>
        </div>
        {/*Mobile responsive sidebar*/}
        <div
          className={
            show
              ? 'absolute w-full h-full transform -translate-x-0 z-40'
              : 'absolute w-full h-full transform -translate-x-full z-40'
          }
          id='mobile-nav'
        >
          <div
            className='bg-gray-800 opacity-50 w-full h-full'
            onClick={() => setShow(!show)}
          />
          <div className='w-64 z-40 fixed overflow-y-auto top-0 bg-primary shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out'>
            <div className='px-6 h-full'>
              <div className='flex flex-col justify-between h-full w-full'>
                <div>
                  <div className='mt-6 flex w-full items-center justify-between'>
                    <div className='flex items-center justify-between w-full'>
                      <div className='flex items-center'>
                        <p className='text-sm  text-white ml-2'>
                          Prathmesh Sadake
                        </p>
                      </div>
                      <div
                        id='cross'
                        className='text-white'
                        onClick={() => setShow(!show)}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='icon icon-tabler icon-tabler-x'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' />
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <ul className='f-m-m'>
                    <a className='cursor-pointer'>
                      <li className='text-white pt-10'>
                        <div className='flex items-center'>
                          <p className='text-secondary xl:text-base text-base ml-3'>
                            1. About
                          </p>
                        </div>
                      </li>
                    </a>
                    <a className='cursor-pointer'>
                      <li className='text-white pt-8'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <p className='text-white xl:text-base  text-base ml-3'>
                              2. Experience
                            </p>
                          </div>
                        </div>
                      </li>
                    </a>
                    <a className='cursor-pointer'>
                      <li className='text-white pt-8'>
                        <div className='flex items-center'>
                          <p className='text-white xl:text-base  text-base ml-3'>
                            3. Projects
                          </p>
                        </div>
                      </li>
                    </a>
                    <li className='text-white pt-8 cursor-pointer'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                          <p className='text-white xl:text-base  text-base ml-3'>
                            4. Contact
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
