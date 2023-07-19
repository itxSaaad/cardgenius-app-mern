import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import Button from '../ui/Button';
import AuthModal from '../ui/AuthModal';

function MainNavbar() {
  // For the Dropdown in Nav
  const [dropIsOpen, setDropIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownRef]);

  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const logoutHandler = () => {
    console.log('Logged Out Successfully!');
    setDropIsOpen(!dropIsOpen);
  };

  const userInfo = false;
  return (
    <nav className="fixed bg-white w-screen shadow-none z-50 transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center  sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-violet-600 border border-violet-700 hover:text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-2xl font-semibold text-violet-600 ml-8 sm:ml-0"
              >
                CardGenius
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="block mt-4 lg:inline-block lg:mt-0 p-2 text-violet-500 hover:font-medium hover:text-violet-700"
                >
                  Home
                </Link>

                <Link
                  href="/generate-card"
                  className="block mt-4 lg:inline-block lg:mt-0 p-2 text-violet-500 hover:font-medium hover:text-violet-700"
                >
                  Generate Card
                </Link>

                <Link
                  href="/contact-us"
                  className="block mt-4 lg:inline-block lg:mt-0 p-2 text-violet-500 hover:font-medium hover:text-violet-700"
                >
                  Contact-Us
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-end mr-5">
            {userInfo ? (
              <div className="relative" ref={dropdownRef}>
                <Button
                  variant="secondary"
                  onClick={() => setDropIsOpen(!dropIsOpen)}
                  className="rounded-md"
                >
                  John Doe
                  <i className="fas fa-caret-down ml-2"></i>
                </Button>
                {dropIsOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1">
                      <Link
                        href="/admin/dashboard"
                        className="text-teal-500 hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base hover:font-bold"
                        onClick={() => setDropIsOpen(!dropIsOpen)}
                      >
                        <i className="fas fa-gauge-high mr-2"></i>Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        className="text-teal-500 hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base hover:font-bold"
                        onClick={() => setDropIsOpen(!dropIsOpen)}
                      >
                        <i className="fas fa-address-card mr-2"></i>Profile
                      </Link>
                      <span
                        onClick={logoutHandler}
                        className="text-teal-500 hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base hover:font-bold"
                      >
                        <i className="fas fa-right-from-bracket mr-2"></i>Logout
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button
                  variant="secondary"
                  className=" font-medium rounded-md text-sm my-2 px-2 py-2 sm:text-md sm:my-4 sm:py-3 sm:px-4"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Login<span className="hidden sm:inline"> / Register</span>
                </Button>

                {isAuthModalOpen && (
                  <AuthModal onClose={() => setIsAuthModalOpen(false)} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="text-violet-500 hover:text-violet-700 block px-3 py-2 rounded-md text-base hover:font-medium"
            onClick={() => setIsOpen(!isOpen)}
          >
            Home
          </Link>
          <Link
            href="/generate-card"
            className="text-violet-500 hover:text-violet-700 block px-3 py-2 rounded-md text-base hover:font-medium"
            onClick={() => setIsOpen(!isOpen)}
          >
            Generate Card
          </Link>
          <Link
            href="/contact-us"
            className="text-violet-500 hover:text-violet-700 block px-3 py-2 rounded-md text-base hover:font-medium"
            onClick={() => setIsOpen(!isOpen)}
          >
            Contact-Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
