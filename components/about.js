import React from 'react';

const About = () => {
  return (
    <div className='bg-white py-12' id='about'>
      {/* <div className='mb-5'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#001315'
            fillOpacity='1'
            d='M0,256L48,234.7C96,213,192,171,288,170.7C384,171,480,213,576,229.3C672,245,768,235,864,197.3C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          ></path>
        </svg>
      </div> */}
      <div className='container p-5 md:p-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-16'>
        <div className='col-span-1'>
          <img
            src='https://source.unsplash.com/mbq0qL3ynMs'
            className='w-full'
            alt=''
          />
        </div>
        <div className='col-span-2 flex flex-col justify-center'>
          <div>
            <p className='leading-none text-gray-600 text-xl'>About me</p>
            <h1
              className='
							text-2xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-3
              mb-6
						'
            >
              Glad to see you here !
            </h1>
            <p className='text-base lg:leading-tight leading-normal tracking-wider text-gray-700 mt-3'>
              My name is Prathmesh Sadake. Passionate about building machine
              learning models that fix problems.
            </p>{' '}
            <p className='text-base lg:leading-tight leading-normal tracking-wider text-gray-700 mt-3'>
              I have worked hands-on with some of the most popular Python
              libraries, including pandas, NumPy, Matplotlib, and many more. I
              have worked with real-world datasets to learn the statistical and
              machine learning techniques I need to perform hypothesis testing
              and build predictive models. I know how to process data for
              features, train models, assess performance, and tune parameters
              for better performance.
            </p>
            <p className='text-base lg:leading-tight leading-normal tracking-wider text-gray-700 mt-3'>
              I am a collaborative person but sometimes I get nervous and
              self-conscious in social situations.Also I enjoy making people
              around me laugh.
            </p>
          </div>
        </div>
      </div>
      {/* <div className='mt-5'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#001315'
            fillOpacity='1'
            d='M0,256L48,234.7C96,213,192,171,288,170.7C384,171,480,213,576,229.3C672,245,768,235,864,197.3C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </div> */}
    </div>
  );
};

export default About;
