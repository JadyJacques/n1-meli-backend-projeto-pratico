const tarefas = require("../model/tarefas.json")

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 4 || id <= 0) {
      res.send("esse id não existe")
    }
    console.log(id)    
    res.status(200).send(tarefas.find(tarefa => tarefa.id == id))
}

    