import express from "express";
import cors from "cors";

const app = express();

const port = process.env.port || 2000;

app.use(cors());

app.listen(port, () =>
  console.log(`${process.env.PORT} App is listening at port ${port}`)
);
