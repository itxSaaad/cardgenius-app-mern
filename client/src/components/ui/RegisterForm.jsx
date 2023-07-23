import { useState } from 'react';

import Loader from './Loader';
import Button from './Button';
import Message from './Message';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <form onSubmit={handleRegister}>
        <p className="text-center text-xl leading-relaxed">
          Create New Account
          <br />
          <span className="text-sm text-violet-500">
            It&apos;s free and only takes a minute
          </span>
        </p>

        {/* {error && <Message variant="error">{error}</Message>} */}

        <div className="w-full my-4">
          <label htmlFor="name" className="sr-only">
            Name
          </label>

          <div className="relative flex justify-center items-center w-full">
            <input
              type="name"
              id="name"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              className="w-full text-teal-600 bg-teal-100 rounded-md p-4 pr-12 text-sm shadow-sm"
            />
          </div>
        </div>

        <div className="w-full my-4">
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative flex justify-center items-center w-full">
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="w-full text-teal-600 bg-teal-100 rounded-md p-4 pr-12 text-sm shadow-sm"
            />
          </div>
        </div>

        <div className="w-full my-4">
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative flex justify-center items-center w-full">
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="w-full text-teal-600 bg-teal-100 rounded-md p-4 pr-12 text-sm shadow-sm"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </label>

          <div className="relative flex justify-center items-center w-full">
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              required
              className="w-full text-teal-600 bg-teal-100 rounded-md p-4 pr-12 text-sm shadow-sm"
            />
          </div>
        </div>

        <Button type="submit" variant="secondary" className="w-full rounded-md">
          Register
        </Button>
      </form>
      {/* )} */}
    </>
  );
}

export default RegisterForm;
