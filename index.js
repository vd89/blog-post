/** @format */

import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';

import indexRoute from './routers/index.js';
import blorRoute from './routers/blogRoute.js';
import dbController from './db/dbController.js';

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// EJS
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');

//Router
app.use('/', indexRoute);
app.use('/blog', blorRoute);

//Database
dbController();

// Server
const port = process.env.PORT || 8085;
app.listen(port, () => {
	console.log(`The port is running on ${port}`);
});
