let puntosUsusario=0;
let puntosComputador=0;

jugar=function(seleccionado){
    let elemento=generarElemento();
    let ruta=generarRuta(elemento);
    let numeroGanador=determinarGanador(elemento,seleccionado);
    mostrarImagen("imgElemento",ruta);
    if(numeroGanador==0){
        mostrarTexto("lblResultado","EMPATE")
    }else if(numeroGanador==1){
        mostrarTexto("lblResultado","PERDISTE LA PARTIDA!!")
        puntosComputador=puntosComputador+1;
    }else if(numeroGanador==2){
        mostrarTexto("lblResultado","GANASTE LA PARTIDA!!")
        puntosUsusario=puntosUsusario+1;
    }
    mostrarTexto("lblPuntajeUsuario","Puntaje del Usuario: "+puntosUsusario)
    mostrarTexto("lblPuntajeComputador","Puntaje del Computador: "+puntosComputador)
    if(puntosUsusario==5){
        mostrarTexto("lblResultado","HAS GANADO EL JUEGO")
    }else if(puntosComputador==5){
        mostrarTexto("lblResultado","EL COMMPUTADOR TE HA VENCIDO")
    }

}

limpiar=function(){
    puntosUsusario=0;
    puntosComputador=0;
    mostrarTexto("lblPuntajeUsuario","Puntaje del Usuario: "+puntosUsusario)
    mostrarTexto("lblPuntajeComputador","Puntaje del Computador: "+puntosComputador)
    mostrarTexto("lblResultado","")
    mostrarImagen("imgElemento","");

}