/** @format */

import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';

import indexRoute from './routers/index.js';
import dbController from './db/dbController.js';

// Middleware
const app = express();

// EJS
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');

//Router
app.use('/', indexRoute);

//Database
dbController();

// Server
const port = process.env.PORT || 8085;
app.listen(port, () => {
	console.log(`The port is running on ${port}`);
});
