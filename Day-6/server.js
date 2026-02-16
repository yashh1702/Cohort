const app = require("./src/app.js")
require("dotenv").config()
const connectToDb = require("./src/config/database.js")

connectToDb()


app.listen(3000,()=>{
    console.log(`App is listening on port http://localhost:3000`)
})