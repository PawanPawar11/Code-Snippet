import type { Application } from "express";

import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./configs/db.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

const startServer = async (): Promise<void> => {
  await connectToDB();

  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
};

startServer();
