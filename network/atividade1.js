const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const {method, url} = req;

    if(method === 'POST' && url === '/json'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({    
            nome: 'Paulo',
            atividade: 'Tipo arquivo: Json',
            curso: '#BoraSerTech'
    
        }))
    }

    else if(method === 'GET' && url === '/html'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <body>
                <h1>Ola Mundo</h1>
                <ul>
                    <li>Bora</li>
                    <li>Ser</li>
                    <li>Tech</li>
                </ul>
                <img src= "https://enginebr.com.br/wp-content/uploads/2020/04/TRADUCAO-9-Responder-efetivamente-a-tecnologia-nao-requer-necessariamente-tecnologia.png"
            </body>
        `)
    }
    if(method === 'PUT' && url === '/text'){
        res.statusCode = 200;
        res.write('Ola Mundo');
        res.end()
    }
})

server.listen(80);