const express = require('express'); //Responsável por fazer a parte da api, pegar as requisições, tratar os dados etc.
const mongoose = require('mongoose') // Responsável pela comunicação do express com o mongo db salvando la no mongodbatlas
const cors = require('cors'); // Server pra deixar você receber requisição de uma fonte externa, que não esteja no mesmo domínio que o seu.

const routes = require('./routes');

const server = express();

//Conexão com o mongodb atlas
mongoose.connect((process.env.MONGO_URL || 'mongodb+srv://Tcc:algodaodoce@tcc-uz7y1.mongodb.net/TCC?retryWrites=true&w=majority'), {
  useNewUrlParser : true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 3333);