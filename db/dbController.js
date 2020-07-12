/** @format */

import mongoose from 'mongoose';
import config from '../config/default.js';

const { connect } = mongoose;
export default async () => {
	try {
		const URI = config.mongoURI;
		const options = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		};
		await connect(URI, options);
		console.log(`DataBase Connected with the App ... 🤺 🤺`);
	} catch (error) {
		console.log('ErrMsg :>> ', error);
	}
};
