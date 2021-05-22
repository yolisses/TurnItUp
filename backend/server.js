import express from 'express';
import cors from 'cors';

import exampleMusics from './exampleMusics.js';

const app = express();
const port = 5000;

app.use(cors());

app.get('/music/:id', (req, res) => {
	// console.log(req);
	res.send(exampleMusics[req.params.id]);
});

app.get('/topmusics', (req, res) => {
	res.send([...Array(exampleMusics.length).keys()]);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
