import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { detailsUser } from '../redux/slices/userSlice';

import Button from '../components/ui/Button';
import Loader from '../components/ui/Loader';
import Message from '../components/ui/Message';
import EditProfileForm from '../components/ui/Profile/EditProfileForm';
import ProfileCard from '../components/ui/Profile/ProfileCard';

function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsUser({}));
  }, [dispatch]);

  const user = useSelector((state) => state.user);
  const { loading, detailsUserError, updateProfileSuccess, userInfo } = user;

  const successMessage = updateProfileSuccess && {
    status: '200',
    message: 'Updated Successfully!',
  };

  useEffect(() => {
    if (updateProfileSuccess) {
      setIsEditing(false);
      dispatch(detailsUser({}));
    }
  }, [dispatch, updateProfileSuccess]);

  return (
    <section className="min-h-screen flex flex-row justify-center items-center bg-teal-600 text-white py-20">
      <div className="mx-auto max-w-screen-xl w-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-6">
        {loading ? (
          <Loader />
        ) : detailsUserError ? (
          <Message variant="danger">{detailsUserError}</Message>
        ) : (
          <>
            <h1 className="text-4xl text-center font-bold mb-4">
              User Profile
            </h1>
            <Button
              variant="success"
              className={`${isEditing ? 'hidden' : 'block'} rounded-md mb-4`}
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              Edit Profile
            </Button>
            {successMessage && (
              <Message variant="success">{successMessage}</Message>
            )}
            {isEditing ? (
              <EditProfileForm setIsEditing={setIsEditing} />
            ) : (
              <ProfileCard user={userInfo} setIsEditing={setIsEditing} />
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default ProfileScreen;
