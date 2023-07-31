import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card';

function Home() {
  const user = useSelector((state) => state.user);
  const { users } = user;

  // Get the current date
  const currentDate = new Date();

  // Function to check if a user was created today
  const isCreatedToday = (userDate) => {
    const userCreationDate = new Date(userDate);
    return (
      userCreationDate.getDate() === currentDate.getDate() &&
      userCreationDate.getMonth() === currentDate.getMonth() &&
      userCreationDate.getFullYear() === currentDate.getFullYear()
    );
  };

  // Function to check if a user was created this week
  const isCreatedThisWeek = (userDate) => {
    const userCreationDate = new Date(userDate);
    const today = currentDate.getDay();
    const userDay = userCreationDate.getDay();
    return (
      currentDate.getTime() - userCreationDate.getTime() <
        7 * 24 * 60 * 60 * 1000 && today >= userDay
    );
  };

  // Function to check if a user was created this month
  const isCreatedThisMonth = (userDate) => {
    const userCreationDate = new Date(userDate);
    return (
      userCreationDate.getMonth() === currentDate.getMonth() &&
      userCreationDate.getFullYear() === currentDate.getFullYear()
    );
  };

  // Filter users based on creation date
  const usersCreatedToday = users.filter((user) =>
    isCreatedToday(user.createdAt)
  );
  const usersCreatedThisWeek = users.filter((user) =>
    isCreatedThisWeek(user.createdAt)
  );
  const usersCreatedThisMonth = users.filter((user) =>
    isCreatedThisMonth(user.createdAt)
  );

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <Card className="text-center p-2 m-2">
        <p className="text-violet-500 text-5xl font-bold">
          {usersCreatedToday.length}
        </p>
        <h1 className="font-regular text-md text-teal-500 mt-2">
          Users Created Today!
        </h1>
      </Card>
      <Card className="text-center p-2  m-2">
        <p className="text-violet-500 text-5xl font-bold">
          {usersCreatedThisWeek.length}
        </p>
        <h1 className="font-regular text-md text-teal-500 mt-2">
          Users Created This Week!
        </h1>
      </Card>
      <Card className="text-center p-2 m-2">
        <p className="text-violet-500 text-5xl font-bold">
          {usersCreatedThisMonth.length}
        </p>
        <h1 className="font-regular text-md text-teal-500 mt-2">
          Users Created This Month!
        </h1>
      </Card>
    </div>
  );
}

export default Home;
