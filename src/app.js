const express = require("express")
const app = express()

app.all("*", function(req, res, next){
    console.log("passamos por aqui com foco, força e fé, huehuehue")
    next()
})
//rotas
const index = require("./routes/index")
const tarefas = require('./routes/tarefasRoute')

app.use('/', index)
app.use("/tarefas",tarefas)

module.exports = app