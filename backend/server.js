import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

const exampleMusics = [
	{
		music1: {
			name: 'music1',
			author: 'author1',
			duration: 180, //seconds
			img: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=pan-yunbo-EgL0EtzL0Wc-unsplash.jpg&w=640',
		},
	},
];

app.use(cors());

app.get('/music/0', (req, res) => {
	res.send(exampleMusics[0]);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
