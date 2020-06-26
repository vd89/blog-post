/** @format */

import config from 'config';
import mongoose from 'mongoose';

const { connect } = mongoose;
export default async () => {
	try {
		const URI = config.get('mongoURI');
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
