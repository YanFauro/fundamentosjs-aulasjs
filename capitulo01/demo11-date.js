// meses começam do zero!
const dataAniversario = new Date(2020, 0, 20)
//console.log(dataAniversario)
const primeiraDataDoJS = new Date(0)
// console.log(primeiraDataDoJS.getTime())

const hoje = new Date()
// console.log(hoje.toString())
// console.log(hoje.toLocaleDateString())

//formato global recomendado!!
// console.log(hoje.toISOString())

const dia = hoje.getDate()
//hoje.setDate(dia + 5 )  // +5 dias depois de hoje
//hoje.setHours(10,30,0)

console.log(`Dia: ${hoje.getDate()}
Mes: ${hoje.getMonth()}
Ano: ${hoje.getFullYear()}
Hora: ${hoje.getHours()}
Minute: ${hoje.getMinutes()}
Seconds: ${hoje.getSeconds()}`)


//Comparar datas a partir da data de criação do Linux em 1970
console.log(new Date(1959,1,20) > new Date(1960,1,20))