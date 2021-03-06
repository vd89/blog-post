/** @format */

import express from 'express';
import blogController from '../controller/blogController.js';
import upload from '../helper/upload.js';

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
router.post('/create', upload, blog_create_post);

// View Single Blog
router.get('/:id', blog_details);

// Delete The Blog
router.post('/:id', blog_delete);

export default router;
