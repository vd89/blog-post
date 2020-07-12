/** @format */

import express from 'express';

const router = express.Router();

//Test route
router.get('/register', (req, res) => {
	res.status(200).render('register');
});
export default router;
