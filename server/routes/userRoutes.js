const express = require('express');
const router = express.Router();

const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require('../controllers/userControllers');

const { protect, admin } = require('../middlewares/authMiddleware');

router.route('/register').post(registerUser);
router.post('/login', authUser);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route('/').get(protect, admin, getAllUsers);
router.route('/:id').delete(protect, admin, deleteUser);
router
  .route('/profile/:id')
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

module.exports = router;
