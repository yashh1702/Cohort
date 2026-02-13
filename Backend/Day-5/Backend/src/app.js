const express = require("express")
const noteModel = require("./models/note.model.js")

const app = express()
app.use(express.json())


// Creating the note
app.post("/api/notes",async (req,res)=>{
    const {title,description} = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "Note created Successfully",
        note
    })
})

//Fetching the note
app.get("/api/notes",async(req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:"Fetched Successfully",
        notes
    })
})

//Deleting the Note
app.delete("/api/notes/:id",async(req,res)=>{
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Deleted Successfully"
    })
})

//updating the note
app.patch("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    const {description} = req.body

    await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message:"updated Successfully"
    })
})

module.exports = app