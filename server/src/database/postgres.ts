import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("", "postgres", "secret", {
  dialect: "postgres",
});

sequelize.authenticate().then(console.log).catch(console.error);
