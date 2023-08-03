const bcrypt = require('bcryptjs');
const emailValidator = require('email-validator');
const asyncHandler = require('express-async-handler');

const generateToken = require('../utils/generateToken');
const User = require('../schemas/userSchema');

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('All Fields Are Required!');
  } else {
    if (emailValidator.validate(email)) {
      let user = await User.findOne({ email: email });

      if (user != null) {
        const match = await bcrypt.compare(password, user.password);

        if (user.email === email && match) {
          res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
            message: 'Login Successful!',
          });
        } else {
          res.status(401);
          throw new Error('Invalid Email or Password!');
        }
      } else {
        res.status(401);
        throw new Error('Invalid Email or Password!');
      }
    } else {
      res.status(400);
      throw new Error('Invalid Email Address!');
    }
  }
});

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  let { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    res.status(400);
    throw new Error('All Fields Are Required!');
  } else {
    if (emailValidator.validate(req.body.email)) {
      let user = await User.findOne({ email: email });

      if (user) {
        res.status(400);
        throw new Error('User Already Exists!');
      } else {
        if (password !== confirmPassword) {
          res.status(400);
          throw new Error('Passwords Do Not Match!');
        } else {
          const salt = await bcrypt.genSalt(Number(process.env.SALT));
          const hashedPassword = await bcrypt.hash(password, salt);

          const user = await User.create({
            name,
            email,
            password: hashedPassword,
          });

          if (user) {
            res.status(201).json({
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
              token: generateToken(user._id),
              message: 'User Registered Successfully!',
            });
          } else {
            res.status(400);
            throw new Error('Invalid User Data!');
          }
        }
      }
    } else {
      res.status(400);
      throw new Error('Invalid Email Address!');
    }
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      password: user.password,
      message: 'User Profile Fetched Successfully!',
    });
  } else {
    res.status(404);
    throw new Error('User Not Found!');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    let { name, email, password, confirmPassword } = req.body;

    if (emailValidator.validate(req.body.email)) {
      let match = false;

      if (password !== '') {
        match = await bcrypt.compare(password, user.password);
      }

      if (user.email === email && match) {
        res.status(400);
        throw new Error('You Have Not Made Any Changes!');
      } else {
        if (password !== '' && password !== confirmPassword) {
          res.status(400);
          throw new Error('Passwords Do Not Match!');
        } else {
          // Update only if the password is not an empty string
          if (password !== '') {
            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            const hashedPassword = await bcrypt.hash(password, salt);
            user.password = hashedPassword;
          }

          user.name = name || user.name;
          user.email = email || user.email;

          const updatedUser = await user.save();

          res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
            message: 'User Profile Updated Successfully!',
          });
        }
      }
    } else {
      res.status(400);
      throw new Error('Invalid Email Address!');
    }
  } else {
    res.status(404);
    throw new Error('User Not Found!');
  }
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  if (users) {
    res.json(users);
  } else {
    res.status(404);
    throw new Error('Users Not Found!');
  }
});

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (user) {
    res.json({ message: 'User Removed Successfully!' });
  } else {
    res.status(404);
    throw new Error('User Not Found!');
  }
});

// @desc    Get user by ID
// @route   GET /api/users/profile/:id
// @access  Private/Admin

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User Not Found!');
  }
});

// @desc    Update user
// @route   PUT /api/users/profile/:id
// @access  Private/Admin

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin =
      req.body.isAdmin === undefined ? user.isAdmin : req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      message: 'User Updated Successfully!',
    });
  } else {
    res.status(404);
    throw new Error('User Not Found!');
  }
});

module.exports = {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  getUserById,
  updateUser,
};
