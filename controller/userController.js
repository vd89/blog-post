/** @format */

import User from '../models/User';

// Register Route
const user_register_get = (req, res) => {
	res.status(200).render('register');
};

const user_register_post = async (req, res) => {
	try {
		const newUser = new User(req.body);
		await newUser.save();
		res.status(200).render('login');
	} catch (err) {
		console.log(err);
		res.status(500).render('404');
	}
	res.status(200).json({ newUser });
};
export default { user_register_get, user_register_post };
