import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserById } from '../../../redux/thunks/userThunks';

import Card from '../Card';
import Loader from '../Loader';
import Message from '../Message';

function Home() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { loading, users, userInfoById } = user;

  const form = useSelector((state) => state.form);
  const { loading: loadingForms, listFormsError, forms } = form;

  const totalUsers = users.length;
  const totalForms = forms.length;

  // Function to check if a user was created today
  const isCreatedToday = (userDate) => {
    const userCreationDate = new Date(userDate);
    const today = new Date();
    return (
      userCreationDate.getDate() === today.getDate() &&
      userCreationDate.getMonth() === today.getMonth() &&
      userCreationDate.getFullYear() === today.getFullYear()
    );
  };

  // Function to check if a user was created this week
  const isCreatedThisWeek = (userDate) => {
    const userCreationDate = new Date(userDate);
    const today = new Date();
    return (
      today.getTime() - userCreationDate.getTime() < 7 * 24 * 60 * 60 * 1000 &&
      today.getDay() >= userCreationDate.getDay()
    );
  };

  // Function to check if a user was created this month
  const isCreatedThisMonth = (userDate) => {
    const userCreationDate = new Date(userDate);
    const today = new Date();
    return (
      userCreationDate.getMonth() === today.getMonth() &&
      userCreationDate.getFullYear() === today.getFullYear()
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

    if (findMaxFormsUser() !== null) {
      dispatch(getUserById(findMaxFormsUser()));
    }
  }, [dispatch, forms, users]);

  const CardsList = [
    {
      title: 'Total Users',
      count: totalUsers,
    },
    {
      title: 'Total Forms',
      count: totalForms,
    },
    {
      title: 'Users Created Today!',
      count: usersCreatedToday.length,
    },
    {
      title: 'Users Created This Week!',
      count: usersCreatedThisWeek.length,
    },
    {
      title: 'Users Created This Month!',
      count: usersCreatedThisMonth.length,
    },
    {
      title: 'Forms Created Today!',
      count: formsCreatedToday.length,
    },
    {
      title: 'Forms Created This Week!',
      count: formsCreatedThisWeek.length,
    },
    {
      title: 'Forms Created This Month!',
      count: formsCreatedThisMonth.length,
    },
    {
      title: 'User With Most Forms',
      count: userInfoById ? userInfoById.name : 'No User',
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {listFormsError ? (
        <Message>{listFormsError}</Message>
      ) : (
        <>
          {CardsList.map((card, index) => (
            <Card key={index} className="text-center p-2 m-2 ">
              {loading || loadingForms ? (
                <Loader />
              ) : (
                <p className="text-violet-500 text-5xl font-bold truncate truncate-middle">
                  {card.count}
                </p>
              )}
              <h1 className="font-regular text-md text-teal-500 mt-2 truncate truncate-middle">
                {card.title}
              </h1>
            </Card>
          ))}
        </>
      )}
    </div>
  );
}

export default Home;
