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

	async update(req, res) {
		const { id } = req.params;
		const { name, duration } = req.body;
		const music = await Music.findByPk(id);
		if (name) {
			await music.update({ name });
		}
		if (duration) {
			await music.update({ duration });
		}
		return res.json(music);
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
