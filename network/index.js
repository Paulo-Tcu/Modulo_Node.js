const http = require('http');

const server = http.createServer();

// server.on('request', (req, res) => {
//   res.write('Olá mundo!');
//   res.end();
// });

// server.listen(8080, () => {
//   console.log(`escutando em http://localhost:8080`);
// });

server.on('request', (req, res) => {
    const {method, url} = req;

    if(method === 'GET' && url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({    
            nome: 'Paulo',
            sobrenome: 'Araujo',
            idade: 25,
    
        }))
    }
})

server.listen(8080);