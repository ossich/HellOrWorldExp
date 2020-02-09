const express = require('express')
const exphbs = require('express-handlebars')

const homeRoutes = require('./routs/home')
const pingRoutes = require('./routs/ping')

const path = require('path')
const app = express()


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'    
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use('/routs',homeRoutes)
app.use('/ping',pingRoutes)



// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'views','index.hbs'))
// })

// app.get('/ping',(req,res)=>{
//     res.sendFile(path.join(__dirname,'views','ping.html'))
// })

app.listen(3000,()=>{
    console.log('Server is running.')
})

