const express = require("express")
const router = express.Router()
const controller = require('../controllers/professorasController')


router.get("/", controller.get)
router.get("/:signo", controller.getBySigno) //procurar o objeto professora atraves do signo

module.exports = router