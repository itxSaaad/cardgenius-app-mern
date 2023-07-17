const express = require('express');
const router = express.Router();

const { protect, admin } = require('../middlewares/authMiddleware');

const {
  getAllForms,
  getFormById,
  createForm,
  deleteForm,
} = require('../controllers/formControllers');

router.route('/').get(protect, admin, getAllForms).post(protect, createForm);

router
  .route('/:id')
  .get(protect, getFormById)
  .delete(protect, admin, deleteForm);

module.exports = router;
