const express = require("express")
require("dotenv").config()
require("./config/databaseChallenge")
const Routes = require("./routes/routes")

const app = express()

const PORT = process.env.PORT || 6001
// va a levantar en el puerto declarado en la variable de ambiente
app.set("port", PORT) 

app.use(express.json())
//estamos pidiendo la respuesta en formato json
app.use("/api", Routes)

app.listen(PORT, ()=>{
    console.log("SERVIDOR CORRIENDO EN EL PUERTO " + app.get("port"))
})