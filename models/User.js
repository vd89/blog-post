/** @format */

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema, model } = mongoose;
const { saltRounds, genSaltSync, hashSync } = bcrypt;

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
	hashedPassword: {
		type: String,
		required: true,
	},
});

UserSchema.virtual('password')
	.set(function (password) {
		this._password = password;
		this.salt = this.makeSalt();
		this.hashedPassword = this.hashingPasswd(password, this.salt);
	})
	.get(function () {
		return this._password;
	});
UserSchema.methods = {
	makeSalt: function () {
		const saltRounds = 10;
		return genSaltSync(saltRounds);
	},
	hashingPasswd: function (password, salt) {
		if (!password) return '';
		try {
			return hashSync(password, salt);
		} catch (err) {
			return err;
		}
	},
};

export default model('User', UserSchema, 'users');
