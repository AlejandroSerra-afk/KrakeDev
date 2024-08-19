
obtenerAleatorio=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorAleatorio;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*3;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorAleatorio=aleatorioEntero+1;
    return valorAleatorio;
}
generarElemento=function(){
    let numeroAleatorio=obtenerAleatorio();
    let elemento;
    if(numeroAleatorio==1){
        elemento="Piedra"
    }else if(numeroAleatorio==2){
        elemento="Papel"
    }else{
        elemento="Tijeras"
    }
    return elemento;
}
determinarGanador=function(eleccionJugador1,eleccionJugador2){
    let numeroGanador;
    if(eleccionJugador1==eleccionJugador2){
        numeroGanador=0
    }else if(eleccionJugador1=="Papel" & eleccionJugador2=="Piedra"){
        numeroGanador=1
    }else if(eleccionJugador1=="Piedra" & eleccionJugador2=="Tijeras"){
        numeroGanador=1
    }else if(eleccionJugador1=="Tijeras" & eleccionJugador2=="Papel"){
        numeroGanador=1
    }else if(eleccionJugador2=="Papel" & eleccionJugador1=="Piedra"){
        numeroGanador=2
    }else if(eleccionJugador2=="Piedra" & eleccionJugador1=="Tijeras"){
        numeroGanador=2
    }else if(eleccionJugador2=="Tijeras" & eleccionJugador1=="Papel"){
        numeroGanador=2
    }
    return numeroGanador;
}
generarRuta=function(nombre){
    let ruta;
    if(nombre=="Piedra"){
        ruta="./imagenes/"+nombre+".png"
    }else if(nombre=="Papel"){
        ruta="./imagenes/"+nombre+".png"
    }else if(nombre=="Tijeras"){
        ruta="./imagenes/"+nombre+".png"
    }
    return ruta;
}