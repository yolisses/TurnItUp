import express from 'express';
import MusicController from './controllers/MusicController.js';
import './database/index.js';

const routes = express.Router();

routes.get('/music', MusicController.index);
routes.post('/music', MusicController.add);

export default routes;
