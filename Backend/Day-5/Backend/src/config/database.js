const mongoose = require("mongoose")

function ConnectedDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected Db")
    })
}

module.exports = ConnectedDb