import express from "express";
import cors from "cors";

const app = express();

const port = 5050;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.listen(port, () => console.log(`App is listening at port ${port}`));
