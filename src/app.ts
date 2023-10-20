import express from "express";
import { technologyRoutes } from "./routes/technologyRoutes";

const app = express();
app.use(express.json());

app.use("/technologies", technologyRoutes);

export { app };