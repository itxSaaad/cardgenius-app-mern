import React from 'react';
import { useSelector } from 'react-redux';

import Table from './Table';
import Message from '../Message';
import Loader from '../Loader';

function FormsList() {
  const formColumns = ['_id', 'name', 'email', 'phone', 'address', 'idImage'];

  const form = useSelector((state) => state.form);
  const { loading, forms, listFormsError } = form;

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold my-2">All Forms</h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          {listFormsError && <Message>{listFormsError}</Message>}
          {forms.length > 0 ? (
            <Table
              data={forms}
              columns={formColumns}
              handleDelete={handleDelete}
            />
          ) : (
            <h2 className="text-red-500 text-xl text-center rounded-md border-2 border-teal-700 font-semibold mb-2 p-4 hidden md:block">
              Not Found..
            </h2>
          )}
        </>
      )}
    </div>
  );
}

export default FormsList;
