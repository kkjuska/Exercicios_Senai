let nota1 = Number(prompt("Digite sua primeira nota!"))
let nota2 = Number(prompt("Digite sua segunda nota!"))
let media = (nota1 + nota2) / 2
if(media > 7){
    alert("O aluno tirou " + media + " ele esta aprovado!")
} else{
    alert("O aluno esta reprovado")
}