function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const media = (nota1 + nota2 + nota3) / 3;

    let resultado;
    if (media >= 7) {
        resultado = "Aprovado";
    } else if (media >= 5) {
        resultado = "Em recuperação";
    } else {
        resultado = "Reprovado";
    }
    document.getElementById("resultadoMedia").innerText = "Média: " + media.toFixed(1) + " - Status: " + resultado;
}
