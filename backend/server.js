import express from 'express';
import dotenv from 'dotenv';
import images from './data/schema.js';
import printStyle from './data/printStyle.js';

dotenv.config();
const app = express();

// Server Runtime
app.get('/', (req, res) => {
	res.send('API is running');
});

// Return schema json string
app.get('/api/images', (req, res) => {
	res.json(images);
});
app.get('/api/printStyle', (req, res) => {
	res.json(printStyle);
});

// returning single ID based on schema
app.get('/api/images/:id', (req, res) => {
	const image = images.find(i => i._id === req.params.id);
	res.json(image);
});

app.get('/api/printStyle/:id', (req, res) => {
	const style = printStyle.find(i => i._id === req.params.id);
	res.json(style);
});

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
