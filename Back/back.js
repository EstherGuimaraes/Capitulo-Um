import express from 'express' 
import { request } from 'http'

const PORT = 3000;
const app = express()

const livros= [
    {  
        "Nome": "narnia",
        "Autor": "EU",
        "Preco": 120,
        "Categoria": "Romance"
    }    
]

app.get('/capum' , (req,res) => {
    res.send(livros);
}) 

app.listen(PORT, "asdioasdijasjdopos")




const queryInserirLivros = 'INSERT INTO sua_tabela (nome, valor) VALUES ?';


