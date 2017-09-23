import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Button from './components/Button.jsx';

const app = express();

app.get('/', (req, res) => {
	const ButtonEl = ReactDOM.renderToString(<Button />);
	return res.send(ButtonEl);
});

app.listen(8080, () => {
	console.log('Server running...');
});