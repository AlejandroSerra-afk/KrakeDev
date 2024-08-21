
generarAleatorios=function(){
    let aleatorios=[];
    let vIngresado=recuperarInt("txtVIngresado");
    let vAleatorio;
    if(vIngresado>=5 & vIngresado<=20){
        for(let i=0;i<vIngresado;i++){
            console.log(i);
            vAleatorio=obtenerAleatorio();
            aleatorios.push(vAleatorio)
        }
    }else{
        alert("Debe ingresar un numero entre 5 y 20 (incluidos)")
        mostrarTexto("divTabla","");
    }
    if(aleatorios.length>0){
        mostrarResultados(aleatorios);
    }
}

mostrarResultados=function(arregloNumeros){
    let contenidoTabla="<table><tr><th>Numeros aleatorios</th></tr>";
    let cmpTabla=document.getElementById("divTabla");
    let miNumero;
    for(let i=0;i<arregloNumeros.length;i++){
        miNumero=arregloNumeros[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNumero;
        contenidoTabla+="</td></tr>";
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

obtenerAleatorio=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorAleatorio;
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*100
    numeroEntero=parseInt(numeroMultiplicado);
    valorAleatorio=numeroEntero+1
    return valorAleatorio
}