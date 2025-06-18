let idade = Number(prompt("Digite sua idade"))
if(idade < 16){
    alert("Voce ainda nao pode votar")
} else if(idade >= 16 && idade <= 17){
    alert("Seu voto e facultativo")
} else if(idade >= 18 && idade <= 65){
    alert("Seu voto e obrigatorio")
} else if(idade > 65){
    alert("seu voto e facultativo")
}