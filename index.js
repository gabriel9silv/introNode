 const express = require('express');
 const cors = require ('cors');

const router = require('./routes/route');
 //const porta = process.env.PORT || 3333;
 const app = express();
 app.use(cors());
 app.use(express.json());
 app.use(router);

 const porta = 3333;0n

 app.listen(porta, () => {
    console.log('Servidor iniciado na porta' + porta);
    //console.log(`Servidor iniciado na porta ${porta}`);
 });

 app.get('/', (request, response) => {
   response.send('Hello World');
 });