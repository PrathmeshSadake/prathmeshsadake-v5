import Head from "next/head";

import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";
import React from "react";

function ToolsSection({
  children,
  title,
  ...props
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Section title={title} {...props}>
      <ul role='list' className='space-y-8'>
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: any;
  children: React.ReactNode;
}) {
  return (
    <Card as='li'>
      <Card.Title as='h3' href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  return (
    <SimpleLayout
      title='Software I use, gadgets I love, and other things I recommend.'
      intro='I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.'
    >
      <div className='space-y-20'>
        <ToolsSection title='Workstation'>
          <Tool title='13” MacBook Pro, M1, 16 GB RAM (2020)'>
            I was using an Intel-based 16” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title='Apple iPad Air 2022'>
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
          <Tool title='Apple Pencil 2nd Generation'>
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Development tools'>
          <Tool title='Microsoft Visual Studio Code'>
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title='Anaconda'>
            Offers the easiest way to perform Python/R data science and machine
            learning on a single machine.
          </Tool>
          <Tool title='GitHub'>
            GitHub is where over 83 million developers shape the future of
            software, together. Contributed to the open source community,
            managing my Git repositories.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Design'>
          <Tool title='Figma'>
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Productivity'>
          <Tool title='Notion'>
            Notion is a minimal project management and note-taking software
            platform. Writing, planing &amp; getting organized in one place.
          </Tool>
          <Tool title='Any.do'>
            An award-winning app used by millions of people to stay organized
            and get more done. Helps me to organize tasks, lists and reminders
            and also syncs seamlessly across all my devices.
          </Tool>
          <Tool title='Forest'>
            Simple tool for blocking distracting apps when I need to just do the
            work and get some momentum going.
          </Tool>
          <Tool title='Sleep Town'>
            Simple tool for building healthy sleep habits. Helps to maintain
            healthy sleeping hours every day
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
