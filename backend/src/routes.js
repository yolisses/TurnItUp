import express from 'express';
import MusicController from './controllers/MusicController.js';
import './database/index.js';

const routes = express.Router();

routes.get('/music', MusicController.index);
routes.post('/music', MusicController.add);
routes.delete('/music/:id', MusicController.remove);
routes.put('/music/:id', MusicController.update);

export default routes;
