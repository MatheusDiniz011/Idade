
/*
Resultado até 11 anos - Criança;
            Resultado entre 12 e 20 anos - Adolecente;
            Resultado entre 21 e 65 anos - Adulto;
            Resultado acima de 65 anos - Idoso;
*/
var idade;
var resultado;

function idadeVer(event){
    

    resultado = document.getElementById("resultado");

    if (idade < 11) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + idade.toFixed(2) + "<br/> Você ainda é considerado criança!";
    } else if (imc >= 17 && imc <= 18.49) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + idade.toFixed(2) + "<br/> Você ainda é considerado adolecente!";
    } else if (imc >= 18.5 && imc <= 24.99) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + idade.toFixed(2) + "<br/> Você já é considerado adulto!";
    } else if (imc >= 25 && imc <= 29.99) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + idade.toFixed(2) + "<br/> Você já é conciderado idoso!";
    } 

    document.getElementById("idade").value = "";
}