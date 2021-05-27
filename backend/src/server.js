import express from 'express';
import cors from 'cors';

import routes from './routes.js';

const app = express();
const port = 2626;

app.use(cors());
app.use(routes);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
