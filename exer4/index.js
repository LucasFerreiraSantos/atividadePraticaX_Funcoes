function converterSegundosHoras(seg){
  const horas = Math.floor(seg / 3600)
  const minutos = Math.floor((seg % 3600) / 60)
  const segundosRestantes = seg % 60

  return {horas, minutos, segundos: segundosRestantes}
}

console.log(converterSegundosHoras(3890))
// 4. Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.

// Ex:
// Entrada: 3672
// Saída: 1:1:12