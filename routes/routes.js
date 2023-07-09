const Routes = require("express").Router()

const cursosControllers = require("../controllers/controllersCursos")
const { getOneCurso, getAllCursos, addCurso, modifyCurso } = cursosControllers

Routes.route("/cursos")
    .get(getAllCursos)
    .post(addCurso)

Routes.route("/cursos/:id")
    .get(getOneCurso)
    .put(modifyCurso)


module.exports = Routes