import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { detailsUser } from '../redux/slices/user/detailsUserSlice';

import Button from '../components/ui/Button';
import Loader from '../components/ui/Loader';
import Message from '../components/ui/Message';
import EditProfileForm from '../components/ui/Profile/EditProfileForm';
import ProfileCard from '../components/ui/Profile/ProfileCard';

function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsUser());
  }, [dispatch]);

  const userLogin = useSelector((state) => state.userLogin);
  const { loading: userLoading, error: userError, userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, userInfo: user } = userDetails;

  const successMessage = success && {
    status: '200',
    message: 'Updated Successfully!',
  };

  return (
    <section className="min-h-screen flex flex-row justify-center items-center bg-teal-600 text-white py-20">
      <div className="mx-auto max-w-screen-xl w-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-6">
        {userLoading || loading ? (
          <Loader />
        ) : userError || error ? (
          <Message variant="danger">{userError || error}</Message>
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
              <EditProfileForm user={user} setIsEditing={setIsEditing} />
            ) : (
              <ProfileCard user={user} setIsEditing={setIsEditing} />
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default ProfileScreen;
