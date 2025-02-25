import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB, sequelize } from "./config/db.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api", routes);

connectDB();
sequelize.sync() 
  .then(() => console.log("Models Synced with Database"))
  .catch((err) => console.error("Error Syncing Models:", err));


app.get("/", (req, res) => {
    res.send("Server is working! 🚀");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
