let notas=[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo=function(){
    let notaR;
    for(let i=0;i<notas.length;i++){
        notaR=notas[i];
        console.log(notaR);
    }
}

probarAgregar=function(){
    let notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota=function(nota){
    notas.push(nota);
}

calcularPromedio=function(){
    let sumaNotas=0;
    let promedio;
    let notaR;
    for(let i=0;i<notas.length;i++){
        notaR=notas[i];
        sumaNotas=sumaNotas+notaR;
    }
    promedio=sumaNotas/notas.length;
    return promedio;
}
ejecutarPromedio=function(){
    let promedio=calcularPromedio();
    mostrarTexto("lblPromedio",promedio)
}
    
