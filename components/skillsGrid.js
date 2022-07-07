import React from 'react';

const SkillsGrid = () => {
  return (
    <div className='pt-20 pb-10'>
      <div className='container p-5 md:p-0 mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-16'>
          <div className='' data-aos='zoom-out' data-aos-delay='1700'>
            <i className='fa-solid fa-chart-column fa-xl text-cyan-300'></i>
            <p className='text-2xl font-extralight leading-tight text-black mt-6'>
              Data Science
            </p>
            <p className='text-gray-700 my-4 font-extralight'>
              I have worked hands-on with some of the most popular Python
              libraries, including pandas, NumPy, Matplotlib, and many more. I
              have worked with real-world datasets to learn the statistical and
              machine learning techniques I need to perform hypothesis testing
              and build predictive models. I know how to process data for
              features, train models, assess performance, and tune parameters
              for better performance. I am a collaborative person but sometimes
              I get nervous and self-conscious in social situations.Also I enjoy
              making people around me laugh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
