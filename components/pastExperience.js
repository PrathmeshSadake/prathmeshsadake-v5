import React from 'react';

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
    profile: 'Full Stack Developer',
    org: 'fintapp.in',
    date: 'Jan 2022',
    tasks: [
      'Working on backend development',
      'Writing clean and understandable code',
      'Working with Cross-platform app development using React Native',
      'Understanding the already present codebase',
    ],
  },
  {
    profile: 'MERN Stack Developer',
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
    ],
  },
];

const PastExperience = () => (
  <div className='overflow-y-hidden bg-gray-100'>
    <div className='mx-auto container f-f-p px-4 xl:px-0 py-24'>
      <h1 className='focus:outline-none text-center text-3xl font-semibold lg:leading-9 tracking-wider text-gray-900 border-b border-gray-200 pb-6'>
        Work Experience
      </h1>
      <div className='grid grid-cols-2 gap-2 my-8'>
        {data.map((ex) => (
          <div
            className='p-5 flex justify-between rounded bg-gray-100 '
            key={ex.org}
          >
            <div className='w-3/5'>
              <p className='text-sm font-bold text-gray-800 '>{ex.profile}</p>
              <p className='mb-2 text-sm font-semibold text-gray-700 '>
                {ex.org}
              </p>
              <ul>
                {ex.tasks.map((task) => (
                  <li className='mb-2 text-xs text-gray-600' key={task}>
                    - {task}
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-3/12 flex flex-col items-end justify-between'>
              <p className='text-xs text-gray-600'>{ex.date}</p>
              <div className='bg-gray-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center'>
                <span className='text-xs text-gray-600 font-normal'>
                  Internship
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default PastExperience;
