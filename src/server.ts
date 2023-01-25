import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "./config/config";
import routes from "./routes/routes";
const app = Express();
app.use(
  cors({
    origin: "http://13.38.72.158:3000",
  })
);
app.use(Express.static("public"));
app.use(Express.json());
mongoose
  .connect(config.mongo.url)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err, "db not connected"));

app.use("/hrsi", routes);

app.listen(config.server.port, () => {
  console.log("server running", config.server.port);
});
