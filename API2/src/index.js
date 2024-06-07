const express = require("express")

const app = express()

app.use(express.json())

const carros = [
    {
        modelo: "S10",
        marca: "Chevrolet"
    },
    {
        modelo: "Fusion",
        marca: "Ford"
    }
]

app.get("/", async (req, res) => {
    
})

app.get("/carros", async (req, res) => {
    res.json([
        {
            modelo: "S10",
            marca: "Chevrolet"
        },
        {
            modelo: "Fusion",
            marca: "Ford"
        }
    ])
})

app.post("/carros", async (req, res) => {
    const { modelo, marca } = req.body

    carros.push({modelo, marca})

    console.log(carros)
    
    res.json(carros)
})

app.listen(3001)