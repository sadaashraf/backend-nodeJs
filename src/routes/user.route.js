import express from 'express';
import { register, login } from '../controller/user.controller.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected route - any logged in user
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Admin only route - protect first then authorize
router.get('/admin', protect, authorize('admin'), (req, res) => {
  res.json({ message: 'Only admin can access this route', user: req.user });
});

export default router;
