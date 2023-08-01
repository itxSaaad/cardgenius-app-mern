import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserById } from '../../../redux/slices/userSlice';

import Card from '../Card';

function Home() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { users, userInfoById } = user;

  const form = useSelector((state) => state.form);
  const { forms } = form;

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

  // Filter forms based on creation date
  const formsCreatedToday = forms.filter((form) =>
    isCreatedToday(form.createdAt)
  );
  const formsCreatedThisWeek = forms.filter((form) =>
    isCreatedThisWeek(form.createdAt)
  );
  const formsCreatedThisMonth = forms.filter((form) =>
    isCreatedThisMonth(form.createdAt)
  );

  useEffect(() => {
    const findMaxFormsUser = () => {
      const userFormsCount = {};

      forms.forEach((form) => {
        const userId = form.user;
        if (userId !== undefined) {
          userFormsCount[userId] = (userFormsCount[userId] || 0) + 1;
        }
      });

      if (Object.keys(userFormsCount).length === 0) {
        // If the forms list is empty or all forms lack userId, return null
        return null;
      }

      // Find the userId with the maximum number of forms
      let maxFormsUser = Object.keys(userFormsCount)[0];
      for (const userId in userFormsCount) {
        if (userFormsCount[userId] > userFormsCount[maxFormsUser]) {
          maxFormsUser = userId;
        }
      }

      return maxFormsUser;
    };

    console.log(findMaxFormsUser());

    if (findMaxFormsUser() !== null) {
      dispatch(getUserById(findMaxFormsUser()));
    }
  }, [dispatch, forms]);

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
      <Card className="text-center p-2 m-2">
        <p className="text-violet-500 text-5xl font-bold">
          {formsCreatedToday.length}
        </p>
        <h1 className="font-regular text-md text-teal-500 mt-2">
          Forms Created Today!
        </h1>
      </Card>
      <Card className="text-center p-2 m-2">
        <p className="text-violet-500 text-5xl font-bold">
          {formsCreatedThisWeek.length}
        </p>
        <h1 className="font-regular text-md text-teal-500 mt-2">
          Forms Created This Week!
        </h1>
      </Card>
      <Card className="text-center p-2 m-2">
        <p className="text-violet-500 text-5xl font-bold">
          {formsCreatedThisMonth.length}
        </p>
        <h1 className="font-regular text-md text-teal-500 mt-2">
          Forms Created This Month!
        </h1>
      </Card>
      <Card className="text-center p-2 m-2">
        {userInfoById === null ? (
          <p className="text-violet-500 text-5xl font-bold">No User</p>
        ) : (
          <p className="text-violet-500 text-5xl font-bold">
            {userInfoById.name}
          </p>
        )}
        <h1 className="font-regular text-md text-teal-500 mt-2">
          User With Most Forms!
        </h1>
      </Card>
    </div>
  );
}

export default Home;
