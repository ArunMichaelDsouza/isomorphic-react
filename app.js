import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Button from './components/Button.jsx';
import path from 'path';

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	const buttonEl = ReactDOM.renderToString(<Button />);
	return res.render('index', { buttonEl });
});

app.listen(8080, () => {
	console.log('Server running...');
});