/** @format */

import BlogPost from '../models/BlogPost.js';

const blog_index = async (req, res) => {
	try {
		const blogs = await BlogPost.find();
		// console.log(blogs);
		res.render('index', { blogs: blogs });
		res.json({ blogs });
	} catch (error) {
		console.log('error :>> ', error);
		res.json({ Msg: 'There is an error from server' });
	}
};

const blog_create_get = (req, res) => {
	res.render('create');
};

const blog_create_post = async (req, res) => {
	try {
		const newBlog = new BlogPost(req.body);
		await newBlog.save();
		res.redirect('/blog');
	} catch (error) {
		console.log(error);
		res.json({ ErrMsg: 'There is an error from Server' });
	}
};

const blog_details = async (req, res) => {
	try {
		const id = req.params.id;
		const blog = await BlogPost.findById(id);
		res.render('singleBlog', { blog });
	} catch (error) {
		console.log(error);
		res.json({ ErrMsg: 'There is an error from Server' });
	}
};

const blog_delete = async (req, res) => {
	try {
		const id = req.params.id;
		await BlogPost.findByIdAndDelete(id);
		res.redirect('/blog');
	} catch (error) {
		console.log(error);
		res.json({ ErrMsg: 'There is an error from Server' });
	}
};

export default {
	blog_index,
	blog_create_get,
	blog_create_post,
	blog_details,
	blog_delete,
};
