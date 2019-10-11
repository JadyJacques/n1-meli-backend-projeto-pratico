const express = require("express")
const router = express.Router()
const controller = require('../controllers/alunasController')


router.get("/", controller.get)


router.get("/nasceuSp", controller.getSp)
router.get("/:id", controller.getById)
router.get("/:id/books", controller.getBooks)
router.get("/:id/getIdade", controller.getIdade)

module.exports = router


//a ordem das rotas altera o resultado de pesquisa, por esse motivo o sp está acima