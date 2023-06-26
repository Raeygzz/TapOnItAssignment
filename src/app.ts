import "reflect-metadata";
import express, { Request, Response } from "express";
import cors from "cors";
import RootRoute from "./routes";
import * as dotenv from "dotenv";
import { AppDataSource } from "./configs";
import { logginMiddleware } from "./middlewares";

dotenv.config();
const app = express();
app.use(express.json());

// app.use(morgan('dev'));
app.use(logginMiddleware);
// app.use(express.urlencoded({ extended: false }));
// app.use(cors({ credentials: true, origin: process.env.URL || "*" }));

app.use("/api", RootRoute);

app.get("/**", async (req: Request, res: Response) => {
  res.send("<h1>404 Not Found</h1>");
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database has been initialized");

    app.listen(process.env.PORT || 41005, () => {
      console.log(`Server has Started On Port ${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log("Database Initialization Failed!! ==> ", err);
  });
