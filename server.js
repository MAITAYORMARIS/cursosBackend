const express = require('express')

require('dotenv').config()
require('./config/database')
const PORT = process.env.PORT || 6000
const app = express()
const Routes =require('./routes/routes')



app.set('port',PORT)
app.use(express.json())
app.use('api', Routes)


app.listen(PORT,()=>{
    console.log("SERVIDOR CORRIENDO EN PUERTO:" + app.get('port'))
})