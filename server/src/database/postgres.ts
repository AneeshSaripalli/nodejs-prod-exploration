import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/`,
  {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
  }
);

//mysql://localhost:3306/database

sequelize.authenticate().then(console.log).catch(console.error);
