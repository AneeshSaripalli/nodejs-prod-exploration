import { Sequelize } from "sequelize";
import express from "express";

const sequelize = new Sequelize("", "postgres", "secret", {
  dialect: "postgres",
});

async function main() {
  try {
    await sequelize.authenticate();
  } catch (err) {
    console.error("Unable to connect to postgres: ", err);
  }
}

main();

const app: express.Application = express();
app.listen(8000, () => {
  console.log("Express app started on port 8000");
});
