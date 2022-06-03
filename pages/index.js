import About from '../components/about';
import Cta from '../components/cta';
import Hero from '../components/hero';
import PastExperience from '../components/pastExperience';
import Projects from '../components/projects';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <PastExperience /> */}

      {/* <div className='mx-auto container'>
        <h1 className='focus:outline-none text-center text-3xl font-semibold lg:leading-9 tracking-wider text-gray-900'>
          Projects and Blogs Section Coming Soon!
        </h1>
      </div> */}
      {/* <Projects /> */}
      <Cta />
    </>
  );
}
