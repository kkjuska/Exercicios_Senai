let diaria = Number(prompt("Quantas diarias voce precisa?"))
let preco

if(diaria >= 1 && diaria <= 5){
    preco = diaria * 100 * 75 / 100 + 150
    alert("Sua conta no total custou R$" + preco)
} else if(diaria >= 6 && diaria <= 10){
    preco = diaria * 90 * 75 / 100 + 150
    alert("Sua conta no total custou R$" + preco)
} else if(diaria >= 11){
    preco = diaria * 80 * 75 / 100 + 150
    alert("Sua conta no total custou R$" + preco)
}