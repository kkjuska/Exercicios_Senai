// Sq2, ex3 - Dias Da Semana

let vetor = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"]
let numero = prompt("selecione um dia da semana.")
if(numero >=1 && numero <=7){
    alert("hoje e  " + vetor[numero - 1])
}  
else{
    alert("numero invalido, selecione um valor de 1 a 7")
}