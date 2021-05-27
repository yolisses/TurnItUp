import Sequelize from 'sequelize';
import Music from '../models/Music.js';

import data from '../config/config.json';
const dbConfig = data['development'];

const connection = new Sequelize(dbConfig);

Music.init(connection);

export default connection;
