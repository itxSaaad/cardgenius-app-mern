import Head from 'next/head';
import dynamic from 'next/dynamic';

import Loader from '@/components/ui/Loader';

const Jumbotron = dynamic(() => import('@/components/home/Jumbotron'), {
  loading: () => <Loader />,
});
const Features = dynamic(() => import('@/components/home/Features'), {
  loading: () => <Loader />,
});
const GetStarted = dynamic(() => import('@/components/home/GetStarted'), {
  loading: () => <Loader />,
});

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
