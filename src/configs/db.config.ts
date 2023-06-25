import { DataSource } from "typeorm";
import path from "path";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.USERNAME || "postgres",
  password: process.env.PASSWORD || "Raeygzz@248",
  database: process.env.DATABASE || "TapOnItAssignment",
  synchronize: process.env.NODE_ENV === "DEV" || true,
  logging: Boolean(process.env.LOGGING) || true,
  entities: [path.join(__dirname, "..", "/entities/../**/**.entity{.ts,.js}")],
  subscribers: [],
  migrations: [],
});

export { AppDataSource };
