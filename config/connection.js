const Sequelize = require('seuquelize');
require('dotenv').config();
const sequelize = new Sequelize(
    procces.env.DB_NAME, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dilect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;