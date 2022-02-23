function randomNumberBetween(min = 2000, max = 7000) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  function randomNumberAsync() {
    const esperar = randomNumberBetween();
    console.log(`O tempo de espera será: ${(esperar/1000).toFixed(2)} segundos`);
    return new Promise((resolve, reject) => {
        const numeroAleatorio = (randomNumberBetween()/1000).toFixed(2);
        //console.log(`Número aleatório gerado é: ${numeroAleatorio} segundos`);
        if(numeroAleatorio >= 3){
            setTimeout(() => {
                resolve(numeroAleatorio);
            },esperar);
        }
        else reject(`Promisse regeitada, valor aleatório gerado: ${numeroAleatorio}`);
    })
  }
  
// chamar usando async
//   (async () => {
//     try {
//         const aleatorio = await randomNumberAsync();
//         console.log(`O valor retornado pela Promisse foi: ${aleatorio} segundos.`);
//     }
//     catch (err){
//         console.log(`Deu ruim !!! ${err}`)
//     }
//   })();

// chamar usando then/catch
//   randomNumberAsync()
//   .then((resultado) => {
//     console.log(`[then/catch] then: ${resultado}`);
//   })
//   .catch((err) => {
//     console.info(`[then/catch] catch: ${err}`);
//   });

// Promisse.all
const arrayPromisses = [
    randomNumberAsync(),
    randomNumberAsync(),
    randomNumberAsync()
]

/* 
promise.all retoanr quando todas forem resolvidas
ou quando uma delas for rejeitada
*/
// Promise
//     .all(arrayPromisses)
//     .then(result => {
//         result.forEach(i => {
//             console.log(`Valor gerado: ${i}`);
//         })
//     })
//     .catch(err => {
//         console.log(`Erro no array de promisse: ${err}`)
//     })

/*
promise.allSettled retorna as promisses seja
resolvidas ou rejeitas em forma de objeto.
*/

Promise
    .allSettled(arrayPromisses)
    .then(result => {
        result.filter(v => v.status === 'fulfilled')
        .forEach((v, indice) => console.log(`Valor da ${indice+1} Promise resolvida é: ${v.value} segundos`))
    })
    .catch(err => {
        console.log(`Erro no array de promises: ${err}`)
    })