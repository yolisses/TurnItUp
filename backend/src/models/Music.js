import { Model, DataTypes } from 'sequelize';

class Music extends Model {
	static init(sequelize) {
		super.init(
			{
				name: DataTypes.STRING,
				duration: DataTypes.INTEGER,
			},
			{ sequelize }
		);
	}
}

export default Music;
