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
          content="Genereate Smart ID Cards for your employees, students, etc."
        />
      </Head>

      <Jumbotron />
      <Features />
      <GetStarted />
    </>
  );
}
