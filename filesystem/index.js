const fs = require('fs');
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

// 3 metodo se sintaxe
fs.promises.readFile(filePatch, 'utf-8').then((res) => console.log(`Esta executando numa Promisse\nEste arquivo é ${res}`));