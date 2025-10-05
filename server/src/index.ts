import express, { Request, Response } from "express";
import otpRoutes from "./routes/auth.router";
import connectDB from "./config/mongodb";
import cors from "cors";
const app = express();
const PORT = 5000;
connectDB();
app.use(express.json());
app.use(cors({ origin: "http://10.69.209.181:5173", credentials: true }));
app.use("/api/auth", otpRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Server in Running");
});

app.listen(PORT, () => {
  console.log(`Running on Port http://localhost:${PORT}`);
});
