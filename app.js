//const express = require("express")
import express from "express"

//const db = require("./database/dbConnected")
import dbConnect from "./database/dbConnected.js"

//const {config} = require("dotenv")
import { config } from "dotenv"

//const categoryRoute = require(`./routes/categoryRoutes`)
import categoryRouter from "./routes/categoryRoutes.js"

import produitsRouter from "./routes/produitsRoutes.js"

const App = express()

config({ path: "./config/config.env" });

dbConnect()
App.use(express.json())
App.use("/api/categories", categoryRouter)
App.use("/api/produits", produitsRouter)

//module.exports = App
export default App

