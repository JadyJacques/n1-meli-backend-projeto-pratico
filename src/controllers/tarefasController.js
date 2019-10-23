const tarefas = require("../model/tarefas.json")

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 8 || id <= 0) {
      res.send("esse id não existe")
    }
    console.log(id)    
    res.status(200).send(tarefas.find(tarefa => tarefa.id == id))
}

exports.getByName = (req, res) => { 
  const nome = req.params.nome
  console.log(nome)    
  res.status(200).send(tarefas.filter(tarefa => tarefa.nomeColaborador == nome))
}
  
exports.getStatus = (req, res) => {
    
  const concluido = tarefas.filter(tarefa => tarefa.concluido == "true")
  
  res.status(200).send(concluido)
}