const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.status(200).send({
        title: "Reprograma Turma Meli Projeto Prático",
        version: "0.0.2"
    })
})

module.exports = router