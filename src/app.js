import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
const app = express();

//init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//init db

// init routes

app.get("/", (req, res, next) => {
  const str = "hello from duck";
  return res.status(200).json({
    message: "welcome to duck js",
    metadata: str.repeat(10000),
  });
});

//handle errors

export default app;
