function calcular() {
    var valorIdade = document.getElementById("idade");
    var idade = valorIdade.value;
    var idadePessoa = parseFloat(idade);

    var diasVividos = parseFloat(idadePessoa * 365);
    console.log(idadePessoa);

    var result = document.getElementById("resultado");
    var diasVividos = "Você já viveu " + diasVividos + " dias.";
    result.innerHTML = diasVividos;
}