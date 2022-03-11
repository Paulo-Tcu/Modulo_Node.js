const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })


// app.post('/', (req, res) => {
//     const body = req.body;
  
//     res.json({
//       received_at: new Date().toISOString(),
//       "message-from-body": body.message,
//     });
// });

const cervejaRouter = require('./cerveja');

app.use(bodyParser.json());
app.use((req, res, next) => {
    req.melhor = 'Melhor cerveja';
    next();
  });

app.use('/cerveja', cervejaRouter);

app.listen(80);