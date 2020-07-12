/** @format */

import multer from 'multer';
import path from 'path';

//Set Storage Engine
const storage = multer.diskStorage({
	destination: './public/uploads/',
	filename: (req, file, cb) => {
		cb(
			null,
			file.fieldname + '-' + Date.now() + path.extname(file.originalname)
		);
	},
});
// File type

// Init Upload
const upload = multer({
	storage: storage,
	limits: { fileSize: 1000000 },
}).single('blogImage');

export default upload;
