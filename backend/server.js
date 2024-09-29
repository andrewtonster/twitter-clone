import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// whenever information is sent via post request, etc it is going to be
// send data as json, express.json parses to js object we can use

const PORT = process.env.PORT;
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("The server is ready");
});
app.listen(PORT, () => {
  console.log("Server is running on port 8080");
});
