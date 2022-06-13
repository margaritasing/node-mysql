const express = require('express')
const bodyParser = require('body-parser')

const app = express()

require('./db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send("Hola Mundo")
})

app.listen(5000, ()=> {
    console.log("Servidor arrancado")
})
