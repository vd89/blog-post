/** @format */

import express from 'express';
const { Router } = express;

const router = Router();

//Welcome Page
router.get('/', (req, res) => {
	res.redirect('/blog');
});
router.get('/about', (req, res) => {
	res.render('about');
});
router.get('/contact', (req, res) => {
	res.render('contact');
});

export default router;
