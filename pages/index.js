import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";

import Layout from "../layouts/Layout";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <WorkExperience />
    </Layout>
  );
}
