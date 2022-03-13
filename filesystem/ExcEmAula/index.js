const fs = require('fs');
const path = require('path');

const filePatch = path.join(__dirname,'file.txt');
fs.promises.readFile(filePatch, 'utf-8').then((resultado) => console.log(`Leitura do arquivo com Promisse:\n${resultado}`));
