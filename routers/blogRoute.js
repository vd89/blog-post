/** @format */

import express from 'express';
import BlogPost from '../models/BlogPost.js';
import blogController from '../controller/blogController.js';

const { Router } = express;
const {
	blog_index,
	blog_create_get,
	blog_create_post,
	blog_details,
	blog_delete,
} = blogController;

const router = Router();

// View all blogs
router.get('/', blog_index);

//Create a blog
router.get('/create', blog_create_get);
router.post('/create', blog_create_post);

// View Single Blog
router.get('/:id', blog_details);

// Delete The Blog
router.post('/:id', blog_delete);

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
