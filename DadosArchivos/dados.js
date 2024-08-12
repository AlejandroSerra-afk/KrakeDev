jugar=function(){
    let aleatorio
    let mensaje;
    aleatorio=lanzarDado();
    if(aleatorio>3){
        mensaje=aleatorio+" Es mayor a 3  GANASTE"
        cambiarTexto("lblNumero",mensaje);
    }else{
        mensaje=aleatorio+" Es menor a 3 ESTAS DE MALAS"
        cambiarTexto("lblNumero",mensaje);
    }
}

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*6
    numeroEntero=parseInt(numeroMultiplicado);
    valorDado=numeroEntero+1
    return valorDado
}