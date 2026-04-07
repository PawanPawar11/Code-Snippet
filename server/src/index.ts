import type { Request, Response, Application } from "express";

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Default endpoint is working fine!");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
