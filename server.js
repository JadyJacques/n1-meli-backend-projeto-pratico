const app = require('./src/app')
const port = 4500
app.listen(port, function(){
    console.log(`O aplicativo está rodando na porta ${port}`)
})