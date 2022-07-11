const express = require('express')
const app = express()
const apiroute = require('./api')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test2')
const db = mongoose.connection

db.on('connected',()=>{
    console.log("Database successfully connected")
})
db.on('error',(error)=>{
    console.log(error)
})

const PORT = 3000 || process.env.port
//body parser 
//id , name , number etc 
//body parser takes these information and creates a new object (req.body)


app.use(express.json())
app.use(express.static('public'))

app.get('/',(req,res)=>{
    console.log(res)
    res.send("wokring")
})

app.use('/api',apiroute)


app.listen(PORT, ()=>{
    console.log(`webserver is running on port ${PORT}`)
})