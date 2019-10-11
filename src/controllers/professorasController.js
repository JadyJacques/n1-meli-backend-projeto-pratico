const professoras = require("../model/professoras.json")

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(professoras)
}

exports.getBySigno = (req, res) => { //get do objeto professora se vc digitar o signo na rota
    const signo = req.params.signo
    console.log(signo)    
    res.status(200).send(professoras.find(professora => professora.signo == signo))
}