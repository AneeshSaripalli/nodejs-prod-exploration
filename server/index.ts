import BodyParser from "body-parser";
import express from "express";
import { sequelize } from "./src/database/postgres";
import { User } from "./src/models/User";
import { collectDefaultMetrics, Registry } from "prom-client";

const register = new Registry();
const app: express.Application = express();

app.use(BodyParser.json({}));
app.use(BodyParser.urlencoded({ extended: true }));

app.get("/checkdb", async (_request, response) => {
  const auth = await sequelize.authenticate();
  response.status(200).send("Auth: " + auth);
});

app.get("/metrics", async (_req, res) => {
  res.status(200).setHeader("Content-Type", register.contentType);
  res.send(await register.metrics());
});

app.post("/adduser", async (request, response) => {
  console.log(request.body);
  const { firstName, lastName } = request.body;
  const user = User.build({
    firstName,
    lastName,
  });

  await user.save();

  response.sendStatus(200);
});

app.listen(8000, () => {
  console.log("Express app started on port 8000");
});
