import React from 'react';
import { useSelector } from 'react-redux';

import Table from './Table';
import Message from '../Message';
import Loader from '../Loader';

function UserList() {
  const userColumns = ['_id', 'name', 'email', 'isAdmin'];

  const user = useSelector((state) => state.user);
  const { loading, listUsersError, users } = user;

  const handleDelete = (id) => {
    console.log(id);
  };

  const handleChangeIsAdmin = (id) => {
    console.log(id);
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold my-2">All User</h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          {listUsersError && <Message>{listUsersError}</Message>}
          <Table
            data={users}
            columns={userColumns}
            handleDelete={handleDelete}
            handleChange={handleChangeIsAdmin}
          />
        </>
      )}
    </div>
  );
}

export default UserList;
