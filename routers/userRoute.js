/** @format */

import express from 'express';
import userController from '../controller/userController.js';

const router = express.Router();

const { user_register_get, user_register_post } = userController;

// Register routes
router.get('/register', user_register_get);
router.post('/register', user_register_post);
export default router;
