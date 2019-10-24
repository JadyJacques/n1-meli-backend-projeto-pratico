# n1-meli-backend-projeto-pratico
projeto prático a fim de exercitar todo o conteúdo dado nas aulas da {reprograma} no curso de back end dentro do meli.
Utilizando NodeJs (nodemon, express).

# API Tarefas

Essa é um API sobre tarefas de colaboradores, com rotas que retornam a lista de tarefas, as tarefas por nome do colaborador, por id e as que estão concluídas. (:

## Instalação

    npm install

## Rode a aplicação

    npm start

## Acesse a porta

    http://localhost:4500/

# API Tarefas

Lista de exemplo do retorno das rotas.

## GET Lista de Tarefas

### Request

`GET /tarefas`

    http://localhost:4500/tarefas

### Response

   `[{"id":1,"dataInclusao":"12/08/2019","concluido":"false","descricao":"Tarefa 1 - Agora Vai","nomeColaborador":"Helena"},{"id":2,"dataInclusao":"12/10/2019","concluido":"true","descricao":"Tarefa 2 - Vai com fé","nomeColaborador":"Juliana"},{"id":3,"dataInclusao":"01/10/2019","concluido":"false","descricao":"Tarefa 3 - Confia","nomeColaborador":"Adriano"},{"id":4,"dataInclusao":"02/09/2019","concluido":"true","descricao":"Tarefa Final - Terminado","nomeColaborador":"Romero"},{"id":5,"dataInclusao":"09/07/2019","concluido":"true","descricao":"Tarefa Bug Extremo - Terminado","nomeColaborador":"Julio"},{"id":6,"dataInclusao":"15/10/2019","concluido":"true","descricao":"Tarefa sei lá - Terminado","nomeColaborador":"Romero"},{"id":7,"dataInclusao":"13/09/2019","concluido":"false","descricao":"Tarefa maluca - Não sei se foi","nomeColaborador":"Rosana"},{"id":8,"dataInclusao":"02/06/2019","concluido":"false","descricao":"Tarefa 384 - Acho que vai","nomeColaborador":"Felipe"}]`

## Get By Id

### Request

`GET /tarefas/:id`

    http://localhost:4500/tarefas/5

### Response
    `{"id":5,"dataInclusao":"09/07/2019","concluido":"true","descricao":"Tarefa Bug Extremo - Terminado","nomeColaborador":"Julio"}`

## Get By Name

### Request

`GET /tarefas/nome/buscar`

    http://localhost:4500/Julio/buscar

### Response
    `[{"id":5,"dataInclusao":"09/07/2019","concluido":"true","descricao":"Tarefa Bug Extremo - Terminado","nomeColaborador":"Julio"}]`

## Get By Status

### Request

`GET /:concluidos/filtrar`

    http://localhost:4500/tarefas/concluidos/filtrar

### Response
    `[{"id":2,"dataInclusao":"12/10/2019","concluido":"true","descricao":"Tarefa 2 - Vai com fé","nomeColaborador":"Juliana"},
    {"id":4,"dataInclusao":"02/09/2019","concluido":"true","descricao":"Tarefa Final - Terminado","nomeColaborador":"Romero"},
    {"id":5,"dataInclusao":"09/07/2019","concluido":"true","descricao":"Tarefa Bug Extremo - Terminado","nomeColaborador":"Julio"},
    {"id":6,"dataInclusao":"15/10/2019","concluido":"true","descricao":"Tarefa sei lá - Terminado","nomeColaborador":"Romero"}]`
