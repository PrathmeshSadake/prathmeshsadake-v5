import HeroSection from "@/components/hero";
import ViewContainer from "@/components/view-container";
import React from "react";

const Home = () => {
  return (
    <>
      {/* <MetaHead /> */}
      <div className='main-view-container'>
        <ViewContainer className='grid grid-cols-1 items-start justify-start gap-12'>
          <HeroSection />
          {/* <ExperienceSection />
          <ProjectSection />
          <ContactSection /> */}
        </ViewContainer>
      </div>
    </>
  );
};

export default Home;
