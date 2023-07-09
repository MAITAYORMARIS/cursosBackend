const Cursos = require("../modelos/cursosModelos")

const cursosControllers = {
    getOneCurso: async (req, res) => {
        const id = req.params.id
        let curso
        let error = null

        try {
            curso = await Cursos.findOne({ _id: id })
        } catch (err) { error = err }
        res.json({
            response: error ? "No hay coincidencias en la DB" : curso,
            success: error ? false : true,
            error: error
        })
    },
    getAllCursos: async (req, res) => {
        let cursos
        let error = null

        try {
            cursos = await Cursos.find()
        } catch (err) { error = err }
        res.json({
            response: error ? "No se encontro informacion cargada en la DB" : { cursos },
            success: error ? false : true,
            error: error
        })
    },
    modifyCurso: async (req, res) => {
        const id = req.params.id
        const newData = req.body.data
        let curso
        let error = null

        try {
            curso = await Cursos.findOneAndUpdate({ _id: id }, newData, { new: true })
        } catch (err) { error = err }
        res.json({
            response: error ? "" : curso,
            success: error ? false : true,
            error: error
        })
    },
    addCurso: async (req, res) => {
        const { imagen, categoria, nombre, frase, duracion, modalidad } = req.body.data
        let curso
        let error

        try {
            let verificoCursos = await Cursos.find({ name: { $regex: nombre, $options: 'i' } })
            if (verificoCursos.length == 0) {
                curso = await new Cursos({
                    imagen: imagen,
                    categoria: categoria,
                    nombre: nombre,
                    frase: frase,
                    duracion: duracion,
                    modalidad: modalidad
                }).save
            }else{
                error = "Ya existe un curso con este nombre " + verificoCursos[2].nombre + " en la base de datos"
            }
        }catch (err) { error = err }
        res.json({
            response: error ? "Ha ocurrido un error al intentar agregar el nuevo objeto" : curso,
            success: error ? false : true,
            error: error
        })
    }
}

module.exports = cursosControllers;