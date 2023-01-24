import { Router } from "express";
import { admincontroller } from "../controller/admincontroller";
import { recordcontroller } from "../controller/recordcontroller";

const routes = Router();
routes.post("/findrecord", recordcontroller);
routes.post("/admin/records", admincontroller);
routes.get("/admin/records", admincontroller);
export default routes;
