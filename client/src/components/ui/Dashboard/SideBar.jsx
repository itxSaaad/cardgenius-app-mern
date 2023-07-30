import React from 'react';

function SideBar({
  menuItems,
  activeMenuItem,
  handleMenuItemClick,
  collapsible,
}) {
  return (
    <div
      className={`bg-teal-700 min-h-screen w-full sm:w-1/6 flex flex-col items-center justify-center shadow-md p-4 transform ${
        collapsible ? 'translate-x-0' : '-translate-x-full'
      } transition-all duration-300 ease-in-out`}
    >
      <h2 className="text-xl font-semibold mb-4 flex flex-row items-center">
        <i className="fas fa-gauge-high mr-2"></i>
        <span className="hidden md:block">Dashboard</span>
      </h2>

      <nav className="text-sm w-full">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-3">
              <button
                onClick={() => handleMenuItemClick(item.name)}
                className={`flex flex-row items-center border border-teal-600 text-white w-full px-3 py-2 rounded-md text-base hover:font-bold ${
                  activeMenuItem === item.name
                    ? 'bg-teal-900'
                    : 'hover:bg-teal-900'
                }`}
              >
                <i className={`${item.icon} mr-2`}></i>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
