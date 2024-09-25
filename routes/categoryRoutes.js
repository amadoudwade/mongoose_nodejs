//const express = require("express")
import express from "express"
import { createCategory, GetAllCategory, GetOneCategory, DeleteOneCategory, UpdateOneCategory } from "../controllers/categoryControllers.js"


const categoryRouter = express.Router()

categoryRouter.post(`/create`, createCategory)

categoryRouter.get(`/`, GetAllCategory)

categoryRouter.get(`/:id`, GetOneCategory)

categoryRouter.delete(`/:id`, DeleteOneCategory)

categoryRouter.put(`/:id`, UpdateOneCategory)

export default categoryRouter