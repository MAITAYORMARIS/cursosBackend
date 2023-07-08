const mongoose=require('mongoose')
const cursosSchema = new mongoose.Schema({
    nombre:{type:String, required:true},
    categoria:{type:String, required:true},
    imagen:{type:String, required:true},
    fraseCall:{type:String, required:true},
    duracion:{type:String, required:true},
    modalidad:{type:String, required:true},
})

const Cursos= mongoose.model("", cursosSchema)
module.exports=Cursos