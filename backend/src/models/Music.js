// import { Model, DataTypes } from 'sequelize';

import pkg from 'sequelize';
const { Model, DataTypes } = pkg;

class Music extends Model {
	static init(sequelize) {
		super.init(
			{
				name: DataTypes.STRING,
				duration: DataTypes.INTEGER,
			},
			{
				sequelize,
				tableName: 'musics',
			}
		);
	}
}

export default Music;
