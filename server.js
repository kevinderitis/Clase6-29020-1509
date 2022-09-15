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

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => console.log('Server running'))
server.on('error', error => console.log(`Error: ${error}`))