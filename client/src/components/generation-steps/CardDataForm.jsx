import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../ui/Button';

function CardDataForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    idImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      idImage: e.target.files[0], // Get the selected image file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="w-full my-2">
        <label htmlFor="name" className="sr-only">
          Name
        </label>

        <div className="relative flex justify-center items-center w-full">
          <input
            type="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
            className="w-full text-teal-600 bg-teal-100 rounded-md p-4 pr-12 text-sm shadow-sm"
          />
        </div>
      </div>

      <div className="w-full my-2">
        <label htmlFor="email" className="sr-only">
          Email
        </label>

        <div className="relative flex justify-center items-center w-full">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            required
            className="w-full text-teal-600 bg-teal-100 rounded-md p-4 pr-12 text-sm shadow-sm"
          />
        </div>
      </div>

      <div className="w-full my-2">
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>

        <div className="relative flex justify-center items-center w-full">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            required
            className="w-full text-teal-600 bg-teal-100 rounded-md p-4 pr-12 text-sm shadow-sm"
          />
        </div>
      </div>

      <div className="w-full my-2">
        <label htmlFor="address" className="sr-only">
          Address
        </label>

        <div className="relative flex justify-center items-center w-full">
          <input
            type="address"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter Address"
            required
            className="w-full text-teal-600 bg-teal-100 rounded-md p-4 pr-12 text-sm shadow-sm"
          />
        </div>
      </div>

      <div className="w-full my-2">
        <label htmlFor="idImage" className="sr-only">
          ID Image
        </label>

        <div className="relative flex justify-center items-center w-full">
          <input
            type="file"
            id="idImage"
            name="idImage"
            onChange={handleImageChange}
            placeholder="Upload ID Image"
            accept="image/*"
            required
            className="w-full text-teal-600 bg-teal-100 rounded-md p-4 pr-12 text-sm shadow-sm"
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full my-2 rounded-md"
      >
        Proceed to Next Step
      </Button>
    </form>
  );
}

CardDataForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CardDataForm;
