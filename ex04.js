function verificarIdade() {
    const idade = parseInt(document.getElementById("idade").value);
    const resultado = (idade >= 18) ? "maior" : "menor";
    document.getElementById("resultadoIdade").innerText = "Você é " + resultado + " de idade.";
}
