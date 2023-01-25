"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordcontroller = void 0;
const recordmodel_1 = require("../model/recordmodel");
const recordcontroller = (req, res) => {
    try {
        const { cnic } = req.body;
        recordmodel_1.recordmodel.find({ cnic: cnic }, { _id: false }, (error, result) => {
            if (error) {
                return res.status(500).json({
                    message: "Error occured while fetching record",
                    status: false,
                });
            }
            if (result.length > 0)
                return res.status(200).json({ data: result[0], status: true });
            return res.status(200).json({
                message: "Could not find record please  check credential and try again",
                status: false,
            });
        });
    }
    catch (error) {
        return res
            .status(500)
            .json({ message: "Could not find record please  try again" });
    }
};
exports.recordcontroller = recordcontroller;
