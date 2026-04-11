const http = require('http')

// MÉTODOS HTTP
// GET -> Buscar um recurso do backend
// POST -> Criar um recurso no backend
// PUT -> Atualizar um recurso no backend
// PATCH -> Atualizar uma informação específica de um recurso no backend
// DELETE -> Deletar um recurso do backend

// Stateful - Stateles

//JSON - JavaScript Object Notation

const users = []

const server = http.createServer((request, response) => {
    const {method, url} = request
    
    if (method == 'GET' && url == '/users') {
        return response
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users') {

        users.push({
            id: 1,
            name: "Jorel",
            email: "jorel123@gmail.com",
        })

        return response.writeHead(201).end()
    }

    return response.writeHead(404).end()
})

server.listen(3333) //localhost = 3333


