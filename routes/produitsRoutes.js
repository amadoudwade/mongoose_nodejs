import express from "express"
import { createProduit, GetAllProduits, GetOneProduit, DeleteOneProduit, UpdateOneProduit } from "../controllers/produitsControllers.js"


const produitsRouter = express.Router()

produitsRouter.post(`/create`, createProduit)

produitsRouter.get(`/`, GetAllProduits)

produitsRouter.get(`/:id`, GetOneProduit)

produitsRouter.delete(`/:id`, DeleteOneProduit)

produitsRouter.put(`/:id`, UpdateOneProduit)

export default produitsRouter