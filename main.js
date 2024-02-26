function validarForm() {
    var numeroA = parseInt(document.getElementById("numeroA").value);
    var numeroB = parseInt(document.getElementById("numeroB").value);

    if (numeroB > numeroA) {
        document.getElementById("mensagem").innerText = "Formulário válido!";
    } else {
        document.getElementById("mensagem").innerText = "Formulário inválido!";
    }
}