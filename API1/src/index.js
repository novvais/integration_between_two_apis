const express = require("express")
const axios = require("axios")

const app = express()

// Esse codigo é criado em uma pasta separada e exportado
const instanciaAxios = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})

app.use(express.json())

app.get("/", async (req, res) => {
    // res.json("Olá da API 1, Porta 3000.")

    // const resultAxios = await axios.get("http://localhost:3001/carros")

    // const resultAxios = await axios.post("http://localhost:3001/carros", {
    //     modelo: "Fusca",
    //     marca: "Volkswagem"
    // })

    const resultAxios = await instanciaAxios.post("/carros", {
        modelo: "Fusca",
        marca: "Volkswagem"
    })

    console.log(resultAxios.data)

    res.json(resultAxios.data);
})

app.listen(3000)

