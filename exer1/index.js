function calcularMedia(nota1, nota2, nota3, letra){
  if(letra == 'a'){
    const mediaAritmetica = (nota1 + nota2 + nota3)/3
    return mediaAritmetica.toFixed(2)
  }else if(letra == 'p'){
    const peso1 = 5
    const peso2 = 3
    const peso3 = 2
    const mediaPonderada = (nota1*peso1 + nota2*peso2 + nota3*peso3)/(peso1 + peso2 + peso3)
    return mediaPonderada.toFixed(2)
  }
}

console.log(calcularMedia(8, 9, 6, 'p'))


// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).