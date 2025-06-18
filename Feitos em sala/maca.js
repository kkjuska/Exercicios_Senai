let macas = Number(prompt("Quantas macas voce ira comprar?"))
let preco

if(macas >= 1 && macas < 12){
    preco = macas * 0.50
    alert("Voce ira pagar R$" + preco + " em macas")
} else if(macas >= 12){
    preco = macas * 0.25
    alert("voce ira pagar R$" + preco + " em macas")
}