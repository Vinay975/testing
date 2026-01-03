import express from "express"
import { Router } from "express";
import  AddUser  from '../controls/datacontrol.js'
import GetData from "../controls/finddatacontrol.js";
import { FindUserByEmail, UpdateUser } from "../controls/update.js";

const router = Router();

router.post("/adduser",AddUser)
router.get("/getdata",GetData)
router.post("/find",FindUserByEmail)
router.put("/update/:id",UpdateUser)

export default router