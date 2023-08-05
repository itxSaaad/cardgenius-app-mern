import PropTypes from 'prop-types';
import React, { Suspense, useEffect, useState } from 'react';

import Loader from '../Loader';

const LoginForm = React.lazy(() => import('./LoginForm'));
const RegisterForm = React.lazy(() => import('./RegisterForm'));

function AuthModal({ onClose }) {
  const [activeForm, setActiveForm] = useState('login');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (onClose) {
      setModalVisible(true);
    }
  }, [onClose]);

  const handleSwitchForm = () => {
    setActiveForm(activeForm === 'login' ? 'register' : 'login');
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-teal-300 bg-opacity-30 backdrop-filter backdrop-blur-sm z-50 transition-opacity duration-200 ${
        modalVisible ? 'opacity-100' : 'opacity-0 delay-150'
      }`}
    >
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white w-3/5 md:w-2/5 border-2 border-violet-600 p-4 rounded-lg">
          <Suspense fallback={<Loader />}>
            {activeForm === 'login' ? <LoginForm /> : <RegisterForm />}
          </Suspense>

          {activeForm === 'login' ? (
            <p className="text-center text-sm text-violet-400">
              No Account?{' '}
              <span
                className="underline text-teal-500 hover:text-teal-700"
                onClick={handleSwitchForm}
              >
                Sign up
              </span>
            </p>
          ) : (
            <p className="text-center text-sm text-teal-400">
              Already have Account?{' '}
              <span
                className="underline text-violet-500 hover:text-violet-700"
                onClick={handleSwitchForm}
              >
                Sign in Here
              </span>
            </p>
          )}

          {/* Close modal button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full hover:text-violet-600  text-white hover:bg-white bg-violet-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={handleModalClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

AuthModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AuthModal;
