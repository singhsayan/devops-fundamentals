import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRES_URI, {
  dialect: "postgres",
  logging: false 
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL Database Connected");
  } catch (error) {
    console.error("Database Connection Error:", error);
    process.exit(1); 
  }
};

export { sequelize, connectDB };
