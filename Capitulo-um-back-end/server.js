const express = require("express");
const cors = require("cors");

const app = exepress();
app.use(cors());
app.use(express.json());

let produtos = [
    {id: 1, nome: "Teclado mêcanico", preco:299.90},
    {id: 2, nome: "Mouse Gamer", preco:159.50},
    {id: 3, nome: "Monitor 24\"Full HD", preco:899.00}
]; 

app.get("/api/produtos",(req, res) => {
    res.json(produtos);
});

app.post("/api/produtos", (req,res) => {
    const {nome, preco} = req.body;

    if (!nome || !preco) {
        return res.status(400).json({ erro: "Nome e Preço são necesários"})
    }
    

})