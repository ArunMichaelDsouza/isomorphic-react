const express = require('express'),
	app = express(),
	React = require('react'),
	ReactDOM = require('react-dom/server'),
	Button = require('./components/Button.jsx');

app.get('/', (req, res) => {
	const ButtonEl = ReactDOM.renderToString(<Button />);
	return res.send(ButtonEl);
});

app.listen(8080, () => {
	console.log('Server running...');
});