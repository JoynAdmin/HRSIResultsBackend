"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordmodel = void 0;
const mongoose_1 = require("mongoose");
const recordschema = new mongoose_1.Schema({
    id: { type: Number, required: true, unique: true },
    cnic: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    level: { type: String, required: true },
    status: { type: String, required: true },
    filename: { type: String, required: true },
});
exports.recordmodel = (0, mongoose_1.model)("recordmodel", recordschema);
