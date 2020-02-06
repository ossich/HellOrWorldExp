const express = require('express')
const path = require('path')
const app = express()

const pingRoutes = require('./routs/ping')

// app.use('/ping',pingRoutes)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})

app.get('/ping',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','ping.html'))
})

app.listen(3000,()=>{
    console.log('Server is running.')
})

