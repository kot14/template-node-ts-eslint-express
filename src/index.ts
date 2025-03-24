import express, { Application } from "express";
import "dotenv/config";

import { routes } from "./routes";



const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on port ${process.env.PORT || 3000}`);
});
