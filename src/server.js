"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://13.38.72.158:3000",
}));
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default
    .connect(config_1.config.mongo.url)
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err, "db not connected"));
app.use("/hrsi", routes_1.default);
app.listen(config_1.config.server.port, () => {
    console.log("server running", config_1.config.server.port);
});
