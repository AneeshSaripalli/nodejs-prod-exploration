import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/`,
  {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
  }
);
