import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import store from './redux/store.js';

import Loader from './components/ui/Loader.jsx';
import ErrorScreen from './screens/ErrorScreen.jsx';

const HomeScreen = React.lazy(() => import('./screens/HomeScreen.jsx'));
const GenerateCardScreen = React.lazy(() =>
  import('./screens/GenerateCardScreen.jsx')
);
const ContactScreen = React.lazy(() => import('./screens/ContactScreen.jsx'));
const ProfileScreen = React.lazy(() => import('./screens/ProfileScreen.jsx'));
const DashboardScreen = React.lazy(() =>
  import('./screens/DashboardScreen.jsx')
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: '/',
        element: <HomeScreen />,
      },
      {
        path: '/generate-card',
        element: <GenerateCardScreen />,
      },
      {
        path: '/contact-us',
        element: <ContactScreen />,
      },
      {
        path: '/profile',
        element: <ProfileScreen />,
      },
      {
        path: '/admin/dashboard',
        element: <DashboardScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <Suspense
        fallback={
          <div className="min-h-screen flex justify-center items-center">
            <Loader />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode>
  </Provider>
);
