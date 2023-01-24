import { recordmodel } from "../model/recordmodel";

export const admincontroller = (req: any, res: any) => {
  try {
    const { records } = req.body;
    recordmodel.insertMany(records, (error: any, result: any) => {
      if (error) {
        if ((error.code = 11000))
          return res
            .status(400)
            .json({
              message:
                "Record with same credentials already exist please remove duplication",
            });
        return res
          .status(500)
          .json({ message: "Could not add records plesase check" });
      }
      console.log(result);
      return res.status(200).json({ message: "Records inserted successfully" });
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Could not add records plesase check" });
  }
};
