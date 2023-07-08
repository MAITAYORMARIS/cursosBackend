const express = require('express')
require('dotenv').config()
require('./config/database')
const PORT = process.env.PORT || 6000
const app = express()



app.set('port',PORT)
app.get('/', (req,res)=>{
    res.send('SERVIDOR CREADO')
})

app.listen(PORT,()=>{
    console.log("SERVIDOR CORRIENDO EN PUERTO:" + app.get('port'))
})