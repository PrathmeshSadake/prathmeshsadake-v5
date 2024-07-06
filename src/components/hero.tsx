import Link from "next/link";
import Button from "./button";
import Callout from "./callout";
import Header from "./header";
import LinkText from "./link-text";
import Section from "./section";

const HeroSection: React.FunctionComponent = () => {
  return (
    <main className='hero-section' id='hero'>
      <Header />
      <Section>
        <h2 className='about-heading leading-snug font-medium text-base text-zinc-900'>
          {"about me."}
        </h2>
        <div className='about-content-wrapper leading-6 text-sm font-normal text-zinc-500 mt-4'>
          <p>
            Specializing in full-stack development (equipped with a robust
            foundation in data structures and algorithms), I possesses a wealth
            of experience in crafting cutting-edge client-facing applications
            and websites.
          </p>
        </div>
        <Callout className='mt-4'>
          <p>
            I am currently working as a Software Engineer at{" "}
            <Link className='underline' href={"https://buildfastwithai.com"} target='_blank'>
              Build Fast with AI
            </Link>
            , leading some exciting projects where I implement secure APIs and
            collaborate to develop apps using various technologies.
          </p>
          <p className='mt-2 mb-4'>
            I closely work with different teams to create and launch web
            applications. As part of our cutting-edge work, I leverage powerful
            technologies like Java, Python, JavaScript, TypeScript, React.js,
            Next.js, Express.js, Node.js, AWS, Supabase, Firebase, Jenkins,
            Docker.
          </p>
          <div className='flex flex-row items-center justify-start gap-4'>
            {/* <Button onClick={() => window.open("https://cal.com/yashsehgal")}>
              {"Schedule a meet / cal.com"}
            </Button> */}
            {/* <LinkText
              href={"/resume"}
              className='text-zinc-600 font-medium text-sm'
            >
              {"Resume"}
            </LinkText> */}
          </div>
        </Callout>
      </Section>
    </main>
  );
};

export default HeroSection;
