import { useSelector, useDispatch } from 'react-redux';

import Table from './Table';
import Message from '../Message';
import Loader from '../Loader';

import {
  deleteUser,
  updateProfileByAdmin,
  listUsers,
} from '../../../redux/thunks/userThunks';

function UserList() {
  const userColumns = ['_id', 'name', 'email', 'isAdmin'];

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const {
    loading,
    users,
    listUsersError,
    updateProfileByAdminError,
    deleteUserError,
    updateProfileByAdminSuccess,
    deleteUserSuccess,
  } = user;

  const handleDelete = (id) => {
    dispatch(deleteUser(id)).then(() => dispatch(listUsers({})));
  };

  const handleChangeIsAdmin = (id, isAdmin) => {
    console.log(id, isAdmin);
    dispatch(updateProfileByAdmin({ id, isAdmin })).then(() =>
      dispatch(listUsers({}))
    );
  };

  const successMessageUpdate = updateProfileByAdminSuccess && {
    status: '200',
    message: 'User Updated Successfully!',
  };

  const successMessageDelete = deleteUserSuccess && {
    status: '200',
    message: 'User Deleted Successfully!',
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold my-2">All User</h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          {(listUsersError || updateProfileByAdminError || deleteUserError) && (
            <Message>
              {listUsersError || updateProfileByAdminError || deleteUserError}
            </Message>
          )}
          {(successMessageUpdate || successMessageDelete) && (
            <Message>{successMessageUpdate || successMessageDelete}</Message>
          )}
          <div className="mt-4">
            {users.length > 0 ? (
              <Table
                data={users}
                columns={userColumns}
                handleDelete={handleDelete}
                handleChange={handleChangeIsAdmin}
              />
            ) : (
              <h2 className="text-white text-xl text-center rounded-md border-2 border-teal-400 font-semibold mb-2 p-4 hidden md:block">
                No Users Found..
              </h2>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default UserList;
