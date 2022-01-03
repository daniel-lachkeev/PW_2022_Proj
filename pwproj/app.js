const express = require('express')
const path = require('path')
const app = express();

app.set('view engine', 'pug')
app.set('views', './src/views')

app.get('/', (req, res) =>
    res.render('index', {
        carros: [ //array de carros
            "fiesta",
            "gol",
            "uno"
        ]
    })
);

//Teste

app.use("/images", express.static(path.join(__dirname, 'images')));

app.listen(3000, () =>
    console.log('Servidor iniciado na porta 3000')
);