const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

const file1 = path.join(__dirname, 'file1.txt');
const file2 = path.join(__dirname, 'file2.txt');
const file3 = path.join(__dirname, 'file3.txt');

/* 
async function lerReadFile(arquivo){
    try{
        return await fs.promises.readFile(arquivo, 'utf-8');
    }
    catch(err){
        throw new Error('Deu ruim :/');
    }
};

const arrPromises = [
    lerReadFile(file1),
    lerReadFile(file2),
    lerReadFile(file3)
];

Promise.all(arrPromises).then(res => {
    return res;
}),
*/
const data1 = fs.readFileSync(file1, 'utf-8');
const data2 = fs.readFileSync(file2, 'utf-8');
const data3 = fs.readFileSync(file3, 'utf-8');
server.on('request', (req, res) => {
    const {method, url} = req;

    if(method === 'POST' && url === '/json'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({    
            nome: data1,
            atividade: data2,
            curso: data3
    
        }));
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