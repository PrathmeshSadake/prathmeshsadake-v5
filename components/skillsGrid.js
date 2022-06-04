import React from 'react';

const SkillsGrid = () => {
  return (
    <div className='bg-primary pt-20 pb-10'>
      <div className='container p-5 md:p-0 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='sm:border-secondary sm:border-b-2'>
            <i className='fa-solid fa-code fa-xl text-yellow-500'></i>
            <p className='text-2xl font-extralight leading-tight text-white mt-6'>
              Software Engineering
            </p>
            <p className='text-gray-400 my-4 font-extralight'>
              I am a full-stack engineer. I usually use the MERN stack, but I'm
              flexible enough to utilize whatever tools are required.
            </p>
          </div>
          <div className='sm:border-secondary sm:border-b-2'>
            <i className='fa-solid fa-chart-column fa-xl text-cyan-300'></i>
            <p className='text-2xl font-extralight leading-tight text-white mt-6'>
              Data Science
            </p>
            <p className='text-gray-400 my-4 font-extralight'>
              I can Collect, Analyzing and Visualize large amount of data using
              Data Science libraries like NumPy, Pandas, Matplotlib,
              Scikit-Learn.
            </p>
          </div>
          <div className='sm:border-secondary sm:border-b-2'>
            <i className='fa-solid fa-brain fa-xl text-lime-300'></i>
            <p className='text-2xl font-extralight leading-tight text-white mt-6'>
              Machine Learning
            </p>
            <p className='text-gray-400 my-4 font-extralight'>
              Beginner in Machine Learning and Artificial Intelligence field.
              Also a quick learner. Have worked with tools and libraries like
              Scikit-Learn, Tensorflow, Anaconda.
            </p>
          </div>
          <div className='sm:border-secondary sm:border-b-2'>
            <i className='fa-solid fa-face-laugh-beam fa-xl text-yellow-300'></i>
            <p className='text-2xl font-extralight leading-tight text-white mt-6'>
              Kinda Funny
            </p>
            <p className='text-gray-400 my-4 font-extralight'>
              I am a collaborative person but sometimes I get nervous and
              self-conscious in social situations.Also I enjoy making people
              around me laugh.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
