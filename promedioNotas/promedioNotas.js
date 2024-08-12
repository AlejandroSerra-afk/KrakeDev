
calcularPromedioNotas=function(){
    let nota1;
    let nota2;
    let nota3;
    let promedio;
    let promRedondeado;

    nota1=recuperarFloat("txtNota1");
    nota2=recuperarFloat("txtNota2");
    nota3=recuperarFloat("txtNota3");

    promedio=calcularPromedio(nota1,nota2,nota3);
    promRedondeado=promedio.toFixed(2);
    mostrarTexto("lblPromedio",promRedondeado);
}