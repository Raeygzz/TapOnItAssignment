import * as dotenv from "dotenv";
import path from "path";
import { DataSource } from "typeorm";

dotenv.config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: process.env.NODE_ENV === "DEV",
  logging: Boolean(process.env.LOGGING),
  entities: [path.join(__dirname, "..", "/entities/../**/**.entity{.ts,.js}")],
  subscribers: [],
  migrations: [],
});

export { AppDataSource };
