import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/route";

// import fetch from "node-fetch";
const app = express();

app.use(express.json());
app.use(cors({ origin: "", credentials: true }));
app.use(cookieParser());

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

// routing
app.use("/api/v1", router);

export default app;
