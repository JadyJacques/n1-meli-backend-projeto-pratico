const express = require("express")
const router = express.Router()
const controller = require('../controllers/tarefasController')


router.get("/", controller.get)


router.get("/:id", controller.getById)
router.get("/:nome/buscar", controller.getByName)
router.get("/:concluidos/filtrar", controller.getStatus)

module.exports = router
