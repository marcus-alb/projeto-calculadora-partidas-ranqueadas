
function calcularRanque(vitorias, derrotas) {
   
    let saldoRankeadas = vitorias - derrotas

    if (vitorias - derrotas < 10) {
        return "Ferro"
    } else if (vitorias - derrotas >= 11 && vitorias - derrotas <= 20) {
        return "Bronze"
    } else if (vitorias - derrotas >= 21 && vitorias - derrotas <= 50) {
        return "Prata"
    } else if (vitorias - derrotas >= 51 && vitorias - derrotas <= 80) {
        return "Ouro"
    } else if (vitorias - derrotas >= 81 && vitorias - derrotas <= 90) {
        return "Diamante"
    } else if (vitorias - derrotas >= 91 && vitorias - derrotas <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}


let vitorias = 150
let derrotas = 20
let resultado = calcularRanque(vitorias, derrotas)
console.log(`O herói tem saldo de ${vitorias - derrotas} vitórias e está no nível de ${resultado}`)