import Music from '../models/Music.js';

export default {
	async index(req, res) {
		const musics = await Music.findAll();
		return res.json(musics);
	},

	async add(req, res) {
		console.log(req);
		const { name, duration } = req.body;
		const musics = await Music.create({ name, duration });
		return res.json(musics);
	},
};
