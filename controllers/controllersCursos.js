const Cursos = require("../models/cursosModels")

const cursosControllers ={
addMultiplesCursos: async (req, res) => {
    const  cursos= []
    let error = []

    for (let curso of req.body.data) {
        try {
            let cursoExistente = await Cursos.find({ name: { $regex: curso.name, $options: "i" } })
            if (cursoExistente.length == 0) {

                let dataCurso = {
                    nombre:curso.nombre,
                    categoria:curso.categoria,
                    imagen:curso.imagen,
                    fraseCall:curso.fraseCall,
                    duracion:curso.duracion,
                    modalidad:curso.modalidad,
                }

                await new Cursos({
                    ...dataCurso
                }).save()
                cursos.push(dataCurso)

            } else {
                error.push({
                    nombre: curso.nombre,
                    result: "Este curso ya existe con el id" + cursoExistente[0]._id + "en la Base de Datos"
                })
            }
        }
        catch (err) { error.push(err) }
    }

    res.json({
        response: error.length > 0 && cursos.length === 0 ? "ERROR" : cursos,
        success: error.length > 0 ? (cursos.length > 0 ? "warning" : false) : true,
        error: error
    })

},

removeCurso: async (req, res) => {
    const id = req.params.id
    let curso
    let error = null

    try {
        curso = await Cursos.findOneAndDelete({ _id: id })
    }
    catch (err) { error = err }
    res.json({
        response: error ? 'ERROR' : curso ? curso : "No se encontro el id:" + id + "para eliminar el elemento de la Base de Datos",
        success: error ? false : curso ? true : false,
        error: error
    })

},
}

module.exports = cursosControllers;