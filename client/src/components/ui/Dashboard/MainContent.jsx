import React from 'react';
import { useSelector } from 'react-redux';

import SideBarToggleButton from './SideBarToggleButton';
import Home from './Home';
import UserList from './UserList';
import FormsList from './FormsList';

function MainContent({
  menuItems,
  activeMenuItem,
  collapsible,
  onToggleSidebar,
}) {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const formattedUserName = userInfo.name
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .join(' ');

  return (
    <div
      className={`bg-teal-600 min-h-screen ${
        collapsible ? 'w-10/12' : 'w-full'
      } transition-width duration-300 ease-in-out p-4`}
    >
      <SideBarToggleButton onClick={onToggleSidebar} isOpen={collapsible} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center font-bold">
          Welcome to Admin Panel {formattedUserName}!
        </h1>

        {activeMenuItem === 'Home' && <Home />}
        {activeMenuItem === 'Users' && <UserList />}
        {activeMenuItem === 'Forms' && <FormsList />}
      </div>
    </div>
  );
}

export default MainContent;
