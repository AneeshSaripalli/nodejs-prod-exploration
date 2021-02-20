import bodyParser from "body-parser";
import express from "express";
import { sequelize } from "./src/database/postgres";
import { User } from "./src/models/User";
import registry from "./src/monitoring/prom";
import { initialize_prom } from "./src/routes/prom";

const app: express.Application = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/checkdb", async (_request, response) => {
  const auth = await sequelize.authenticate();
  response.status(200).send("Auth: " + auth);
});

initialize_prom(app, registry);

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

app.listen(process.env.PORT || 8000, () => {
  console.log("Express app started on port 8000");
});
