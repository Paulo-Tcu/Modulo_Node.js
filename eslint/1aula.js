// const args = process.argv.slice(2);

// function maiorIdade(idade) {
//     idade = Number.parseInt(idade);

//     if (isNaN(idade)){
//         throw new Error("Input inválido");
//     }    
//     return idade >= 18;
// }

// console.log(maiorIdade(19));

function verificaIdade(idade) {
  if (idade >= 18) {
    return 'maior de idade';
  }
  return 'Maior de idade';
}

console.log(verificaIdade());
