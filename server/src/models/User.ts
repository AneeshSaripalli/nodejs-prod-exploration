import { DataTypes } from "sequelize";
import { sequelize } from "../database/postgres";

const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync();

export { User };
