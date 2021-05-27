import Music from '../models/Music.js';

export default {
	async index(req, res) {
		const musics = await Music.findAll();
		return res.json(musics);
	},
};
