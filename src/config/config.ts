import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;
const url = process.env.DATABASEURL || "";

export const config = {
  mongo: {
    url: url,
  },
  server: {
    port: port,
  },
};