const professoras = require("../model/professoras.json")

// exports.get = (req, res) => { //get de todos os itens dentro do json professoras
//     console.log(req.url)
//     res.status(200).send(professoras)
// }

// exports.get = (req, res) => { //usando o map e tornando "invisivel" o item cpf
//     const profSemCpf = professoras.map(item => {
//         item.cpf= "***********"
//         return item
//     })
//     res.status(200).send(profSemCpf)   
// }

exports.get = (req, res) => { //usando o map e deletando o item cpf
    const profSemCpf = professoras.map(item => {
        delete item.cpf
        return item
    })
    res.status(200).send(profSemCpf)   
}

// exports.get = (req, res) => { // usando array, loop e definindo objeto
//     const arrProfs = []
//     for(let i = 0; i< professoras.length; i++) {
//         const semCpf = {}
//         semCpf.id = professoras[i].id
//         semCpf.nome = professoras[i].nome
//         semCpf.especialidade = professoras[i].especialidade
//         semCpf.signo = professoras[i].signo
//         arrProfs.push(semCpf)
//     }
//     res.status(200).send(arrProfs)
// }

// exports.getBySigno = (req, res) => { //get do objeto professora se vc digitar o signo na rota
//     const signo = req.params.signo
//     console.log(signo)    
//     res.status(200).send(professoras.find(professora => professora.signo == signo))
// }

exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 4 || id <= 0) {
      res.send("id não é valido")
    }
    console.log(id)    
    res.status(200).send(professoras.find(professora => professora.id == id))
}