function classificarTriangulo() {
    const lado1 = parseFloat(document.getElementById("lado1").value);
    const lado2 = parseFloat(document.getElementById("lado2").value);
    const lado3 = parseFloat(document.getElementById("lado3").value);

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        let tipo;
        if (lado1 === lado2 && lado2 === lado3) {
            tipo = "equilátero";
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            tipo = "isósceles";
        } else {
            tipo = "escaleno";
        }
        document.getElementById("resultadoTriangulo").innerText = "Os lados formam um triângulo " + tipo + ".";
    } else {
        document.getElementById("resultadoTriangulo").innerText = "Os lados não formam um triângulo.";
    }
}
