/** @format */

import multer from 'multer';
import path from 'path';

//Set Storage Engine
const storage = multer.diskStorage({
	destination: './public/images/',
	filename: (req, file, cb) => {
		cb(
			null,
			file.fieldname + '-' + Date.now() + path.extname(file.originalname)
		);
	},
});

// Init Upload
const upload = multer({
	storage: storage,
	limits: { fileSize: 1000000 },
}).single('blogImage');

export default upload;
