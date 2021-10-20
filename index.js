const express = require('express')
const configDB = require('./config/database')
const route = require('./config/route')
const port = 3033
const app = express()

configDB()
app.use(express.json())
app.use(route)

app.get('/',(req,res)=>{
    res.send('the server is up')
})

app.listen(port ,()=>{
    console.log('server is listining on port ',port)
})