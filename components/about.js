import React from 'react';

const About = () => {
  return (
    <div className='bg-white'>
      <div className='mb-5'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#001315'
            fill-opacity='1'
            d='M0,256L48,234.7C96,213,192,171,288,170.7C384,171,480,213,576,229.3C672,245,768,235,864,197.3C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          ></path>
        </svg>
      </div>
      <div className='container p-5 md:p-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 '>
        <div className='col-span-1 flex flex-col justify-center'>
          <p className='leading-none text-gray-600 text-xl'>About me</p>
          <h1
            className='
							lg:text-4xl
							text-2xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-3
						'
          >
            Glad to see you here !
          </h1>
        </div>
        <div className='col-span-2'>
          <div>
            <p className='text-base lg:leading-tight leading-normal text-gray-700 mt-3'>
              My name is Prathmesh Sadake. I&apos;m a full-stack engineer. As a
              full-stack developer, I can create client-facing apps and websites
              with cutting-edge back-end support. I usually use the MERN stack,
              but I&apos;m flexible enough to utilize whatever tools are
              required.
            </p>
            <p className='text-base lg:leading-tight leading-normal text-gray-700 mt-3'>
              I specialize in creating solid backends for your app or website
              that handle all of the heavy liftings. I enjoy creating systems
              that are both light and powerful, distributed yet coordinated, and
              beautiful yet functional. I&apos;d like to continue producing
              individualized goods for people by combining my passion for
              learning with my software development talents.
            </p>{' '}
            <p className='text-base lg:leading-tight leading-normal text-gray-700 mt-3'>
              When I&apos;m not working, I like to spend time reading books,
              listening audiobooks or podcasts, learning to code or tinkering
              with new apps and tools.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#001315'
            fill-opacity='1'
            d='M0,256L48,234.7C96,213,192,171,288,170.7C384,171,480,213,576,229.3C672,245,768,235,864,197.3C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default About;
