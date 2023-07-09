const Routes = require('express').Router()

const cursosControllers = require('../controllers/controllersCursos')

const {addMultiplesCursos, removeCursos} = cursosControllers

Routes.route("/cursos")
.post((req,res)=>{Array.isArray(req.body.data) ? addMultiplesCursos(req,res):addCurso(req,res)})

Routes.route("/cursos/:id")
.delete(removeCursos)



module.exports= Routes;