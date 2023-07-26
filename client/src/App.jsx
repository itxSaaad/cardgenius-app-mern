import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Loader from './components/ui/Loader';

const HomeScreen = React.lazy(() => import('./screens/HomeScreen'));
const GenerateCardScreen = React.lazy(() =>
  import('./screens/GenerateCardScreen')
);
const ContactScreen = React.lazy(() => import('./screens/ContactScreen'));
const ProfileScreen = React.lazy(() => import('./screens/ProfileScreen'));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen flex justify-center items-center">
            <Loader />
          </div>
        }
      >
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/generate-card" element={<GenerateCardScreen />} />
            <Route path="/contact-us" element={<ContactScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
