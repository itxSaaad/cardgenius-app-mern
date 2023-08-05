import PropTypes from 'prop-types';

import Button from '../Button';

function Table({ data, columns, handleDelete, handleChange }) {
  return (
    <div className="overflow-x-auto">
      <table className="bg-teal-700 w-full table-auto border-collapse border-2 border-violet-400 rounded-lg text-center overflow-hidden whitespace-no-wrap">
        <thead className="bg-teal-800 h-10 uppercase font-bold">
          <tr>
            {columns.map((column) => (
              <th key={column}>{column.replace(/([A-Z])/g, ' $1').trim()}</th>
            ))}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="bg-teal-600 text-teal-100">
          {data.map((row) => (
            <tr key={row._id}>
              {columns.map((column) => (
                <td
                  key={column}
                  className="border border-teal-500 px-4 py-2 sm:px-2 sm:py-1"
                >
                  {column === 'isAdmin' ? (
                    <input
                      className="h-5 w-5 "
                      type="checkbox"
                      checked={row[column]}
                      onChange={() => handleChange(row._id, !row[column])}
                    />
                  ) : column === 'idImage' ? (
                    <img
                      className="h-14 w-14 rounded-full"
                      src={row[column]}
                      alt="idImage"
                    />
                  ) : (
                    row[column]
                  )}
                </td>
              ))}

              <td className="border border-teal-500">
                <Button
                  variant="danger"
                  className="rounded-md"
                  onClick={() => handleDelete(row._id)}
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Table;
