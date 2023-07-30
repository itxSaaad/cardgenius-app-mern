import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthModal from '../components/ui/Auth/AuthModal';
import MainContent from '../components/ui/Dashboard/MainContent';
import SideBar from '../components/ui/Dashboard/SideBar';

function DashboardScreen() {
  const menuItems = [
    {
      name: 'Home',
      icon: 'fas fa-home',
    },
    {
      name: 'Users',
      icon: 'fas fa-users',
    },
    {
      name: 'Forms',
      icon: 'fas fa-clipboard-list',
    },
  ];

  const [activeMenuItem, setActiveMenuItem] = useState('Home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(true);
  const [collapsible, setCollapsible] = useState(false);

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  useEffect(() => {
    if (!userInfo) {
      setIsAuthModalOpen(true);
    } else {
      setIsAuthModalOpen(false);
      if (!userInfo.isAdmin) {
        navigate('/');
      }
    }
  }, [navigate, userInfo]);

  const toggleSidebar = () => {
    setCollapsible((prevState) => !prevState);
  };

  const handleMenuItemClick = (name) => {
    setActiveMenuItem(name);
    toggleSidebar();
  };

  return (
    <section className="min-h-screen flex bg-teal-600 text-white pt-16">
      {!userInfo ? (
        <AuthModal
          onClose={() => {
            setIsAuthModalOpen(false);
            navigate('/');
          }}
        />
      ) : (
        <>
          {collapsible && (
            <SideBar
              menuItems={menuItems}
              handleMenuItemClick={handleMenuItemClick}
              activeMenuItem={activeMenuItem}
              collapsible={collapsible}
            />
          )}

          <MainContent
            menuItems={menuItems}
            activeMenuItem={activeMenuItem}
            collapsible={collapsible}
            onToggleSidebar={toggleSidebar}
          />
        </>
      )}
    </section>
  );
}

export default DashboardScreen;