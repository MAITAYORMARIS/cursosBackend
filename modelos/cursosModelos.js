const mongoose = require("mongoose")

const cursosSchema = mongoose.Schema({
    imagen: { type: String, required: true },
    categoria: { type: String, required: true },
    nombre: { type: String, required: true },
    frase: { type: String, required: true },
    duracion: { type: String, required: true },
    modalidad: { type: String, required: true },
})

const Cursos = mongoose.model("cursos", cursosSchema)
module.exports = Cursos