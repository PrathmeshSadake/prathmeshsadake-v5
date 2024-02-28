import React from "react";

const About = () => {
  return (
    <div className='min-h-screen py-12 md:py-32 flex flex-col space-y-4 lg:space-y-6 max-w-5xl mx-auto'>
      <h1 className='text-2xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
        About Me
      </h1>
      <p className='font-medium text-lg text-zinc-400'>
        Prathmesh Sadake is a dedicated Software Engineer at Build Fast with AI,
        equipped with a robust foundation in data structures and algorithms.
        With a keen eye for optimization, Prathmesh excels in tailoring software
        modifications to meet client requirements while adhering to the
        principles of computer science. His primary objective is to enhance
        application performance, ensuring seamless user experiences.
      </p>
      <p className='font-medium text-lg text-zinc-400'>
        Specializing in full-stack development, Prathmesh possesses a wealth of
        experience in crafting cutting-edge client-facing applications and
        websites. His expertise spans a wide array of modern tools, including
        Next.js, React.js, MongoDB, Node.js, Express.js, Firebase, and Postman.
        While he predominantly utilizes the MERN stack, Prathmesh maintains
        flexibility to adapt to any necessary tools or technologies, ensuring
        each project's success.
      </p>
      <p className='font-medium text-lg text-zinc-400'>
        In addition to his professional achievements, Prathmesh is a lifelong
        learner, evident through his completion of the Full-Stack Web
        Development with React Specialization and Front End Developer
        Nano-Degree from Udacity. His passion for programming extends beyond the
        workplace, as he actively engages in coding-related hobbies and
        pursuits. Moreover, Prathmesh is committed to personal fitness,
        demonstrating discipline and balance in both his professional and
        personal endeavors.
      </p>
      <p className='font-medium text-lg text-zinc-400'>
        Prathmesh's dedication to excellence has earned him recognition,
        including the prestigious Vimeet Pro Coder title for ranking first in
        college-level coding competitions in C-Programming. Furthermore, his
        proficiency in Python secured him a notable third place ranking in
        similar competitions. These accolades underscore Prathmesh's exceptional
        talent and commitment to continual growth and achievement in the field
        of software engineering.
      </p>
    </div>
  );
};

export default About;
