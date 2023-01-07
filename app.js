require('./config/database')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const userRouter = require("./routes/user.routes")
const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/api",userRouter)


app.use((req,res,next)=>{
    res.status(404).json({
        message: "404! User Not Fiund"
    })
})

app.use((err,req,res,next)=>{
    res.status(500).json({
        message: "500! Sumthing Broke"
    })
})

module.exports = app