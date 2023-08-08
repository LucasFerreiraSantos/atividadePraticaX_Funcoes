function verificarNumPerfeito(num){
  const divisores = []
  let somaDivisores = 0
    for(let i = 1; i < num; i++){
      if(num % i === 0){
        divisores.push(i)
      }
    }
    for(let j = 0; j < divisores.length; j++){
      somaDivisores += divisores[j]
    }
    if(somaDivisores === num){
      return `${num} é um número perfeito!`
    }else{
      return `${num} não é perfeito!`
    }
}

console.log(verificarNumPerfeito(28))

// 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.

// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores