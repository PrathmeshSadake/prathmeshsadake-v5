import About from '../components/about';
import Cta from '../components/cta';
import Hero from '../components/hero';
import PastExperience from '../components/pastExperience';
import Projects from '../components/projects';
import SkillsGrid from '../components/skillsGrid';

import { Section } from 'react-scroll-section';

export default function Home() {
  return (
    <>
      <Section id='hero'>
        <Hero />
      </Section>
      <Section id='about'>
        <About />
      </Section>
      {/* <Section id='work'>
        <PastExperience />
        <SkillsGrid />
      </Section>{' '} */}
      <Section id='projects'>
        <Projects />
      </Section>{' '}
      <Section id='contact'>
        <Cta />
      </Section>
    </>
  );
}
