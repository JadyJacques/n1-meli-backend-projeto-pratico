const alunas = require("../model/alunas.json")

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 17 || id <= 0) {
      res.send("id não é valido")
    }
    console.log(id)    
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}

exports.getBooks = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    if(!aluna){
        res.send("nao localizada")
    }
    const livros = aluna.livros //.map(test => aluna.livros)
    const titulos = livros.map(livro => livro.titulo)
    //console.log(livros)
    res.status(200).send(titulos)
}

exports.getSp = (req, res) => {
    
    const nasceuSp = alunas.filter(menina => menina.nasceuEmSp == "true")
    const meninasSP = nasceuSp.map(aluna => aluna.nome)
    
    res.status(200).send(meninasSP)
}

exports.getIdade = (req, res) => {

    const id = req.params.id 
    const aluna = alunas.find(aluna => aluna.id == id) //determinando que o id é o mesmo recebido 
    const dataNasc = aluna.dateOfBirth  //pegando a data de nascimento das alunas presentes no json
    const arrData = dataNasc.split('/') //dividindo essa string por barra dentro de um array
    const dia = arrData[0] //pegando o dia do nascimento
    const mes = arrData[1] //pegando o mes do nascimento
    const ano = arrData[2] //pegando o ano do nascimento
    const idade = calcularIdade (ano, mes, dia) //usando a função
    res.status(200).send({ idade }) // retornando o valor de idade
}

function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
      const now = new Date()
      const anoAtual = now.getFullYear()
      const mesAtual = now.getMonth() + 1
      const hoje = now.getDate()
    
      let idade = anoAtual - anoDeNasc
    
      if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
        idade -= 1
      }
      return idade
    }
    