const express = require('express')
const colecaoUF = require('./dados/dados')

const app = express()
    
app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = ''
    let uf;


    if(!(isNaN(idUF))) {
        uf =  colecaoUF.colecaoUf.find(uf => uf.id === idUF)
        if(!uf) {
            mensagemErro = 'UF não encontrada'
        }

        else{
            mensagemErro = 'Requisição Inválida'
        }
    }

    if (uf) {
        res.json(uf)

    } else{
        res.status(404).json({"erro": mensagemErro})
    }
})

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080 em' + new Date())
})

