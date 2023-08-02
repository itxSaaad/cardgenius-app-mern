const asyncHandler = require('express-async-handler');

const IDCardCredential = require('../schemas/idCredentialsSchema');

// @desc    Get ID card credentials by ID
// @route   GET /api/forms/:id
// @access  Public

const getFormById = asyncHandler(async (req, res) => {
  const idCardCredential = await IDCardCredential.findById(req.params.id);

  if (idCardCredential) {
    res.json(idCardCredential);
  } else {
    res.status(404);
    throw new Error('ID Card Credentials Not Found!');
  }
});

// @desc    Create ID card credentials
// @route   POST /api/forms
// @access  Public

const createForm = asyncHandler(async (req, res) => {
  const { name, email, phone, address } = req.body;
  const userId = req.user._id;

  // req.file contains the uploaded image information
  if (!req.file) {
    res.status(400);
    throw new Error('Please Upload an image');
  }

  const idImage = req.file.path; // Uploaded image path

  const idCardCredential = new IDCardCredential({
    user: userId,
    name,
    email,
    phone,
    address,
    idImage,
  });

  const createdIDCardCredential = await idCardCredential.save();

  res.status(201).json({
    message: 'ID Card Credentials Created!',
    idCardCredential: createdIDCardCredential,
  });
});

// @desc    Delete ID card credentials
// @route   DELETE /api/forms/:id
// @access  Private/Admin

const deleteForm = asyncHandler(async (req, res) => {
  const deletedIdCardCredential = await IDCardCredential.findByIdAndDelete(
    req.params.id
  );

  if (deletedIdCardCredential) {
    res.status(201);
    res.json({ message: 'ID Card Credentials Deleted!' });
  } else {
    res.status(404);
    throw new Error('ID Card Credentials Not Found!');
  }
});

// @desc    Get all ID card credentials
// @route   GET /api/forms
// @access  Private/Admin

const getAllForms = asyncHandler(async (req, res) => {
  const idCardCredentials = await IDCardCredential.find({});
  if (idCardCredentials) {
    res.json(idCardCredentials);
  } else {
    res.status(404);
    throw new Error('ID Card Credentials Not Found!');
  }
});

module.exports = {
  getFormById,
  createForm,
  deleteForm,
  getAllForms,
};
