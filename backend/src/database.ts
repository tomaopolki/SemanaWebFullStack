import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(`mysql://root:${process.env.MYSQL_PASS}@localhost:3306/pitu`, {
    logging: false,
});

export default sequelize;