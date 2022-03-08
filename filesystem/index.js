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
// async function lerArquivoAsync(){
//     try{
//         const data = await fsPromises.readFile(filePatch2, 'utf-8');
//         const lines = data.split('.');
//         return lines[0];
//     } catch (err){
//         throw new Error('Não deu pra ler o arquivo !!!');
//     }
// }

// lerArquivoAsync().then(res => console.log(res));

//readdir -- verificando se o conteudo dentro do diretorio é um arquivo usando readdir e stat
fs.readdir(__dirname, (err, files) => {
    files.forEach(f => {
        const fPath = path.join(__dirname, f);
        fs.stat(fPath, (err, fileStatus) => {
            let type;
            if(fileStatus.isFile() === true) type = 'File';
            else if(fileStatus.isDirectory() === true) type = 'Dire';
            console.log(`File: ${f.substring(0,8)}\t isFile or isDir : ${type}\t\t${fileStatus.size}\tBytes`);
        });
    });
});