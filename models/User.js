/** @format */

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
	userName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

export default model('User', UserSchema, 'users');
