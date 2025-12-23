import express from "express"
import { Router } from "express";
import  AddUser  from '../controls/datacontrol.js'

const router = Router();

router.post("/adduser",AddUser)

export default router