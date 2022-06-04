import About from '../components/about';
import Cta from '../components/cta';
import Hero from '../components/hero';
import PastExperience from '../components/pastExperience';
import Projects from '../components/projects';
import SkillsGrid from '../components/skillsGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PastExperience />

      <SkillsGrid />
      <Cta />
    </>
  );
}
