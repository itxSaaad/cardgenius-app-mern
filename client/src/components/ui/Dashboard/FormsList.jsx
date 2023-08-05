import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../Loader';
import Message from '../Message';
import Table from './Table';

import { deleteForm, listForms } from '../../../redux/thunks/formThunks';

function FormsList() {
  const formColumns = ['_id', 'name', 'email', 'phone', 'address', 'idImage'];

  const dispatch = useDispatch();

  const form = useSelector((state) => state.form);
  const { loading, forms, listFormsError, deleteFormError, deleteFormSuccess } =
    form;

  const handleDelete = (id) => {
    dispatch(deleteForm(id)).then(() => dispatch(listForms({})));
  };

  const successMessageDelete = deleteFormSuccess && {
    status: '200',
    message: 'Form Deleted Successfully!',
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold my-2">All Forms</h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          {(listFormsError || deleteFormError) && (
            <Message>{listFormsError || deleteFormError}</Message>
          )}
          {deleteFormSuccess && <Message>{successMessageDelete}</Message>}
          <div className="mt-4">
            {forms.length > 0 ? (
              <Table
                data={forms}
                columns={formColumns}
                handleDelete={handleDelete}
              />
            ) : (
              <h2 className="text-white text-xl text-center rounded-md border-2 border-teal-400 font-semibold mb-2 p-4 hidden md:block">
                No Forms Found..
              </h2>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default FormsList;
