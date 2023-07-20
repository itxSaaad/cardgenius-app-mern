import Head from 'next/head';

import Features from '@/components/home/Features';
import GetStarted from '@/components/home/GetStarted';
import Jumbotron from '@/components/home/Jumbotron';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>CardGenius - Smart ID Card Generation System</title>
        <meta
          name="description"
          content="Create professional ID cards for your organization, school, or events using CardGenius."
        />
        <meta
          name="keywords"
          content="cardgenius, generate card, ID card, professional ID card"
        />
        <meta name="author" content="Muhammad Saad" />
      </Head>

      <Jumbotron />
      <Features />
      <GetStarted />
    </>
  );
}
