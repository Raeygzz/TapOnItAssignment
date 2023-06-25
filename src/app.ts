import "reflect-metadata";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import RootRoute from "./routes";
import * as dotenv from "dotenv";
// import { fileURLToPath } from "url";
// import { dirname, join } from "path";
import { AppDataSource } from "./configs";

dotenv.config();
const app = express();
app.use(express.json());

// app.use(morgan('dev'));
// app.use(AuthMiddleware);
// app.use(logginMiddleware);
// app.use(express.urlencoded({ extended: false }));
// app.use(cors({ credentials: true, origin: process.env.URL || "*" }));

app.use("/api", RootRoute);

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
