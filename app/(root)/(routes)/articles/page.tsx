import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SimpleLayout } from "@/components/SimpleLayout";
import Head from "next/head";
import React from "react";

const articles = [
  {
    title: "Things I wish I knew before I got to know them",
    slug: "things-i-wish-i-knew-before-i-got-to-know-them",
    date: "October 1, 2022",
    description:
      "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all. In this article, I’ll be sharing with you few things I wish I knew earlier. These are things that would have made us happier, more successful, and more well-rounded individuals.",
  },
];

function Article({ article }) {
  return (
    <article className='md:grid md:grid-cols-4 md:items-baseline'>
      <Card className='md:col-span-3'>
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as='time'
          dateTime={article.date}
          className='md:hidden'
          decorate
        >
          {article.date}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as='time'
        dateTime={article.date}
        className='mt-1 hidden md:block'
      >
        {article.date}
      </Card.Eyebrow>
    </article>
  );
}

const Articles = () => {
  return (
    <>
      <Head>
        <title>Articles - Prathmesh Sadake</title>
        <meta
          name='description'
          content='All of my long-form thoughts on programming, productivity, mindfulness, life-lessons, and more.'
        />
      </Head>
      <SimpleLayout
        title='Writing on Productivity and Life Lessons'
        intro='All of my long-form thoughts on productivity, mindfulness, life-lessons, and more.'
      >
        <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
          <div className='flex max-w-3xl flex-col space-y-16'>
            {articles.map((article) => (
              <Article article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
};

export default Articles;
