/** @format */

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BlogPostSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	snippet: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
});

export default model('BlogPost', BlogPostSchema, 'blogsposts');
