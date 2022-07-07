import React, { useState } from 'react';

const data = [
  {
    profile: 'MERN Stack Developer',
    org: 'Docsup Private Limited',
    date: 'Jan 2022 - Feb 2022',
    tasks: [
      'Worked with ReactJS, Node.js, and Express',
      'Worked with Firebase',
    ],
  },
  {
    profile: 'Frontend Developer',
    org: 'Techsnap',
    date: 'Jan 2022',
    tasks: [
      'Worked on the UI/UX design enhancing user journey and creative elements.',
      'Translated UI/UX design wireframes into high-quality code that will produce visual elements of the application.',
      'Improved existing UI of Web Application.',
    ],
  },
  {
    profile: 'ReactJS Developer',
    org: 'The Tann Mann Gaadi ',
    date: 'Aug 2021 - Sep 2021',
    tasks: [
      'Developed new user-facing features using React.js.',
      'Created reusable components and front-end libraries for future use.',
    ],
  },
  {
    profile: 'Web Software Developer',
    org: 'Arca Innovations',
    date: 'Mar 2021 - Apr 2021 ',
    tasks: [
      'Improved existing UI of Web Application.',
      'Assisted with writing content for the descriptive elements of the website.',
      'Translated UI/UX design wireframes into high-quality code that will produce visual elements of the application.',
    ],
  },
];

const PastExperience = () => {
  const [currentEx, setCurrentEx] = useState(data[0]);

  return (
    <div className='bg-primary py-5'>
      <h3
        className='
							lg:text-4xl
							text-xl
							font-extralight
							lg:leading-6
							leading-7
							text-secondary
							my-10
              text-center
						'
      >
        Work Experience
      </h3>
      <div
        className='container p-5 md:p-0 max-w-4xl mx-auto grid grid-cols-5 py-5'
        style={{ minHeight: '250px' }}
      >
        <div className='col-span-2'>
          {data.map((ex, idx) => (
            <div
              key={ex.org}
              style={{
                backgroundColor: ` ${
                  currentEx === ex ? '#04AB5C' : 'transparent'
                }`,
                maxWidth: '80%',
                wordWrap: 'normal',
              }}
              className={`cursor-pointer p-2 mb-2 ${
                currentEx === ex
                  ? 'text-black border-l-4 border-secondary'
                  : 'text-secondary'
              }`}
              onClick={() => setCurrentEx(ex)}
            >
              {idx + 1}. {ex.org}
            </div>
          ))}
        </div>
        <div className='col-span-3'>
          <div>
            <p className='text-lg'>
              {currentEx.profile} @{' '}
              <span className='text-secondary'>{currentEx.org}</span>
            </p>
            <p className='text-xs lg:leading-tight leading-normal text-gray-700 mb-3'>
              {currentEx.date} | Internship
            </p>
            <ul className='list-disc'>
              {currentEx.tasks.map((task) => (
                <li key={task} className='text-sm text-gray-700 my-1'>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PastExperience;
