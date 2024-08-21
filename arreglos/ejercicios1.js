let notas=[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

agregarTabla=function(){
    let contenidoTabla="";
    let cmpTabla=document.getElementById("divTabla");
    contenidoTabla+="<table><tr><td>Uno</td></tr>"+"<tr><td>Dos</td></tr></table>";
    cmpTabla.innerHTML=contenidoTabla
}

mostrarNotas=function(){
    let contenidoTabla="<table><tr><th>Notas</th></tr>";
    let cmpTabla=document.getElementById("divTabla");
    let miNota;
    for(let i=0;i<notas.length;i++){
        miNota=notas[i];
        contenidoTabla+="<tr><td>"
        contenidoTabla+=miNota
        contenidoTabla+="</td></tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
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
    mostrarNotas();
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
    
