import { recordmodel } from "../model/recordmodel";

export const recordcontroller = (req: any, res: any) => {
  try {
    const { cnic } = req.body;
    recordmodel.find(
      { cnic: cnic },
      { _id: false },
      (error: any, result: any) => {
        if (error) {
          return res.status(500).json({
            message: "Error occured while fetching record",
            status: false,
          });
        }
        if (result.length > 0)
          return res.status(200).json({ data: result[0], status: true });
        return res.status(200).json({
          message:
            "Could not find record please  check credential and try again",
          status: false,
        });
      }
    );
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Could not find record please  try again" });
  }
};
