/** @format */

import express from 'express';
import BlogPost from '../models/BlogPost.js';
const { Router } = express;

const router = Router();

router.get('/', (req, res) => {
	res.json({ Msg: 'This is the blog route' });
});

router.post('/', async (req, res) => {
	try {
		const newBlog = new BlogPost(req.body);
		await newBlog.save();
		res.json({ Msg: 'The Blog is saved in DB' });
	} catch (error) {
		res.json({ ErrMsg: { error } });
	}
});

export default router;
