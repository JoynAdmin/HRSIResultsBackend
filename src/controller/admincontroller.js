"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admincontroller = void 0;
const recordmodel_1 = require("../model/recordmodel");
const admincontroller = (req, res) => {
    try {
        const { records } = req.body;
        recordmodel_1.recordmodel.insertMany(records, (error, result) => {
            if (error) {
                if ((error.code = 11000))
                    return res
                        .status(400)
                        .json({
                        message: "Record with same credentials already exist please remove duplication",
                    });
                return res
                    .status(500)
                    .json({ message: "Could not add records plesase check" });
            }
            console.log(result);
            return res.status(200).json({ message: "Records inserted successfully" });
        });
    }
    catch (error) {
        return res
            .status(500)
            .json({ message: "Could not add records plesase check" });
    }
};
exports.admincontroller = admincontroller;
