/** @format */

import express from 'express';
const { Router } = express;

const router = Router();

//Welcome Page
router.get('/', (req, res) => {
	res.render('welcome');
});
router.get('/about', (req, res) => {
	res.render('about');
});
router.get('/post', (req, res) => {
	res.render('post');
});
router.get('/contact', (req, res) => {
	res.render('contact');
});
export default router;
