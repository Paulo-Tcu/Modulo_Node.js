const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

// Primeiro metodo assincrono
const filePatch = path.join(__dirname, 'file.txt');
// fs.readFile(filePatch, 'utf-8', (err, data) => {
//     console.log('Os dados do arquivo são', data);
// });

// metodo sincrono
// const data = fs.readFileSync(filePatch, 'utf-8');
// console.log('Reposta do readFileSync', data);
// console.log('Agora sim é o final');

// 3 metodo de sintaxe
// fs.promises.readFile(filePatch, 'utf-8').then((res) => console.log(`Esta executando numa Promisse\nEste arquivo é ${res}`));

const filePatch2 = path.join(__dirname, 'file2.txt');
const dataAgora = Date.now();

// function readCallback(err, data){
//     const linhas = data.split('\n')
//     console.log(`Isso tá rodando no callback do readfile\n\n ${linhas[0]}\n`);
//     console.log(`\nTempo dentro do callback ${(Date.now() - dataAgora) /1000}`);
// }

// fs.readFile(filePatch2, 'utf-8', readCallback);
// console.log('E aqui tem algo muito importante pra executar\n');
// console.log(`\nTempo antes do Callback: ${(Date.now() - dataAgora)/1000}`);

//async await
async function lerArquivoAsync(){
    try{
        const data = await fsPromises.readFile(filePatch2, 'utf-8');
        const lines = data.split('.');
        return lines[0];
    } catch (err){
        throw new Error('Não deu pra ler o arquivo !!!');
    }
}

lerArquivoAsync().then(res => console.log(res));