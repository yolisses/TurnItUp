import Music from '../models/Music.js';

export default {
	async index(req, res) {
		const musics = await Music.findAll();
		return res.json(musics);
	},

	async add(req, res) {
		const { name, duration } = req.body;
		const musics = await Music.create({ name, duration });
		return res.json(musics);
	},

	async remove(req, res) {
		const { id } = req.params;
		const musics = await Music.destroy({
			where: {
				id: id,
			},
		});
		return res.json({});
	},
};
