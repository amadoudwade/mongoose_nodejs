//const server = require("http")
//const App = require("./app")
import { Server } from "http"
import App from "./app.js"

// server.createServer(App).listen(8000)
App.listen(8000, ()=>{
    console.log(`Server is running on port 8000 ...`)
})