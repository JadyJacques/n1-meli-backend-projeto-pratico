const express = require("express")
const app = express()

app.all("*", function(req, res, next){
    console.log("passamos por aqui com foco, força e fé, huehuehue")
    next()
})
//rotas
const index = require("./routes/index")
const alunas = require('./routes/tarefasRoute')

app.use('/', index)
app.use("/tarefas", alunas)

module.exports = app