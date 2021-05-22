import express from 'express';
import cors from 'cors';

import exampleMusics from './exampleMusics.js';

const app = express();
const port = 5000;

app.use(cors());

app.get('/music/0', (req, res) => {
	res.send(exampleMusics[0]);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
