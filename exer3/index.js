function verificarNumPrimo(num){
  let divisores=0;

  for(let i=1; i<=num; i++)
    if(num % i === 0) divisores++;

    if(divisores==2) console.log(`Você digitou ${num}, ele é primo.`);
    else console.log(`Você digitou ${num}, ele não é primo`);
}

verificarNumPrimo(5)

// 3. Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.