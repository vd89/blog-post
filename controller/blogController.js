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
export default { blog_index, blog_create_get };
