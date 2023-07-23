import React, { Suspense } from 'react';

import Loader from '../components/ui/Loader';

const Jumbotron = React.lazy(() => import('../components/home/Jumbotron'));
const Features = React.lazy(() => import('../components/home/Features'));
const GetStarted = React.lazy(() => import('../components/home/GetStarted'));

export default function HomeScreen() {
  return (
    <Suspense fallback={<Loader />}>
      <Jumbotron />
      <Features />
      <GetStarted />
    </Suspense>
  );
}
