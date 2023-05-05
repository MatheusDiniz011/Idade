
/*
Resultado até 11 anos - Criança;
            Resultado entre 12 e 20 anos - Adolecente;
            Resultado entre 21 e 65 anos - Adulto;
            Resultado acima de 65 anos - Idoso;
*/
var idade;
var resultado;

function idadeVer(){
    idade = document.getElementById("idade").value;
    if (idade < 11) {
        document.getElementById("resultado").innerText="Você ainda é considerado criança!";
    } else if (idade >= 12 && idade <= 20) {
        document.getElementById("resultado").innerText="Você ainda é considerado adolecente!";
    } else if (idade >= 21 && idade <= 65) {
        document.getElementById("resultado").innerText="Você já é considerado adulto!";
    } else if (idade >= 66 && idade <= 100) {
        document.getElementById("resultado").innerText="Você já é considerado idoso!";
    }

    document.getElementById("idade").value = "";
}