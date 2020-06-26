/** @format */

import express from 'express';
const { Router } = express;

const router = Router();

//Welcome Page
router.get('/', (req, res) => {
	res.render('welcome');
});

export default router;
