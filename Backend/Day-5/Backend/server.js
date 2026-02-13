require("dotenv").config()
const app = require("./src/app")
const ConnectDb = require("./src/config/database.js")


ConnectDb()

app.listen(3000,(req,res)=>{
    console.log("Server is listening on port 3000")
})