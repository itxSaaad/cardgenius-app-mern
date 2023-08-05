import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfile } from '../../../redux/thunks/userThunks';

import Button from '../Button';
import Loader from '../Loader';
import Message from '../Message.jsx';

function EditProfileForm({ setIsEditing }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { loading, updateProfileError, userInfo } = user;

  const initialFormData = {
    name: userInfo.name,
    email: userInfo.email,
    password: '',
    confirmPassword: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setIsEditing(false);
  };

  return (
    <div className="sm:w-1/2 w-full bg-teal-500 flex flex-col justify-center items-center text-justify rounded-lg shadow-lg mb-4 sm:m-2 px-6 py-2 border-2 border-transparent hover:shadow-xl hover:border-teal-700 transition-colors duration-300">
      <form onSubmit={handleSubmit} className="w-full">
        {updateProfileError && <Message>{updateProfileError}</Message>}
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="mb-4">
              <label
                className="block text-white text-lg font-bold mb-2"
                htmlFor="name"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-teal-400 text-white rounded py-2 px-3 focus:outline-none focus:shadow-outline"
                value={formData.name}
                onChange={handleFieldChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-lg font-bold mb-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full bg-teal-400 text-white rounded py-2 px-3 focus:outline-none focus:shadow-outline"
                value={formData.email}
                onChange={handleFieldChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white text-lg font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-teal-400 text-white rounded py-2 px-3 focus:outline-none focus:shadow-outline"
                onChange={handleFieldChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white text-lg font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full bg-teal-400 text-white rounded py-2 px-3 focus:outline-none focus:shadow-outline"
                onChange={handleFieldChange}
              />
            </div>

            <div className="flex justify-between">
              <Button type="submit" variant="success" className="rounded-md">
                Save Changes
              </Button>
              <Button
                variant="danger"
                className="rounded-md"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

EditProfileForm.propTypes = {
  setIsEditing: PropTypes.func.isRequired,
};

export default EditProfileForm;
