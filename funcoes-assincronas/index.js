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
  (async () => {
    try {
        const aleatorio = await randomNumberAsync();
        console.log(`O valor retornado pela Promisse foi: ${aleatorio} segundos.`);
    }
    catch (err){
        console.log(`Deu ruim !!! ${err}`)
    }
  })();

  // chamar usando then/catch