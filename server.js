const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let objeto = { ruta: "raiz"}
    res.send(objeto)
})

app.get('/user', (req, res) => {
    let objeto = { ruta: "user"}
    res.send(objeto)
})

const server = app.listen(8080, () => console.log('Server running'))
server.on('error', error => console.log(`Error: ${error}`))