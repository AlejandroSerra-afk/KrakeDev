
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

    if(promRedondeado<5 && promRedondeado>0){
        mostrarImagen("imgResultado","./gifs/fracaso.gif");
        mostrarTexto("lblResultado","REPROBADO");
    }else if(promRedondeado>=5 && promRedondeado<=8){
        mostrarImagen("imgResultado","./gifs/exito.gif");
        mostrarTexto("lblResultado","BUEN TRABAJO");
    }else if(promRedondeado>8 && promRedondeado<=10){
        mostrarImagen("imgResultado","./gifs/excelente.gif");
        mostrarTexto("lblResultado","EXCELENTE");
    }else{
        mostrarImagen("imgResultado","./gifs/incorrecto.gif");
        mostrarTexto("lblResultado","DATOS INCORRECTOS");
    }
}