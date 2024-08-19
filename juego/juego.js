
jugar=function(seleccionado){
    let elemento=generarElemento();
    let ruta=generarRuta(elemento);
    let numeroGanador=determinarGanador(elemento,seleccionado);
    mostrarImagen("imgElemento",ruta);
    if(numeroGanador==0){
        mostrarTexto("lblResultado","EMPATE")
    }else if(numeroGanador==1){
        mostrarTexto("lblResultado","PERDISTE LA PARTIDA!!")
    }else if(numeroGanador==2){
        mostrarTexto("lblResultado","GANASTE LA PARTIDA!!")
    }
}