const fs = require('fs');
const path = require('path');

const file1 = path.join(__dirname,'file1.txt');
const file2 = path.join(__dirname,'file2.txt');
const fileResultado = path.join(__dirname, 'file_resultado.txt');

async function lerArquivo(arquivo){
    try{
        return await fs.promises.readFile(arquivo, 'utf-8');
    }
    catch(err){
        throw new Error('Deu ruim :/');
    }
}

let resultado = '';
const arrPromises = [
    lerArquivo(file1),
    lerArquivo(file2)
]

Promise.all(arrPromises).then(res => {
    res.forEach( file => {
        resultado += file+' '
    });
    fs.writeFile(fileResultado, resultado,{encoding: 'utf-8', flag:'a'}, function (err){
        if(err) throw err;
        console.log('Arquivo Salvo!')
    });
    fs.readFile(fileResultado, (_, data) => console.log(`Conteúdo do arquivo: ${data}`));
}).catch((err) => {
    console.info(`[then/catch] catch: ${err}`);
});
