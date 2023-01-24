import { Model, model, Schema } from "mongoose";

interface modeltype {
  id: number;
  cnic: number;
  name: string;
  level: string;
  status: string;
  filename: string;
}

const recordschema = new Schema<modeltype>({
  id: { type: Number, required: true, unique: true },
  cnic: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  level: { type: String, required: true },
  status: { type: String, required: true },
  filename: { type: String, required: true },
});

export const recordmodel = model<modeltype>("recordmodel", recordschema);
