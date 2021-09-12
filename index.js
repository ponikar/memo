import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(express.static(path.join(__dirname, "./build")));
app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "./build/index.html"), (err) => {
    console.log("OOPS ERROR", err);
  });
});

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL =
  "mongodb+srv://amisha:amisha123@cluster0.vmsir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8080;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => console.log(`${error} did not connect`));

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);

mongoose.set("useFindAndModify", false);
