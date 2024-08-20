//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta;
let intentos=0;
let coincidencias=0;
let errores=0;

esMayuscula=function(caracter){
    let codigoCaracter=caracter.charCodeAt(0);
    if(codigoCaracter>=65 && codigoCaracter<=90){
        return true;
    }else{
        return false;
    }
}

guardarPalabra=function(){
    let palabra=recuperarTexto("txtSecreta");
    let letra;
    let tamanio=palabra.length;
    let contadorMayusculas=0;
    if(tamanio==5){
        for (let i = 0; i < tamanio; i++) {
            letra = palabra.charAt(i);
            if(esMayuscula(letra)){
                contadorMayusculas++;
            }
        }
        if(contadorMayusculas==5){
            palabraSecreta=palabra
        }else{
            alert("Debe ingresar una palabra de 5 letras MAYUSCULAS. ")
        }
    }else{
        alert("Debe ingresar una palabra de 5 letras. ")
    }
    console.log(palabraSecreta);
}

mostrarLetra=function(letra,posicion){
    if(posicion==0){
        mostrarTexto("div0",letra)
    }else if(posicion==1){
        mostrarTexto("div1",letra)
    }else if(posicion==2){
        mostrarTexto("div2",letra)
    }else if(posicion==3){
        mostrarTexto("div3",letra)
    }else if(posicion==4){
        mostrarTexto("div4",letra)
    }
}

validar=function(letra){
    let letrasEncontradas=0;
    let caracter;
    for (let i = 0; i < palabraSecreta.length; i++) {
        caracter = palabraSecreta.charAt(i);
        if(letra==caracter){
            mostrarLetra(letra,i);
            letrasEncontradas++;
            coincidencias++;
        }
    }
    if(letrasEncontradas==0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA. ")
        errores++;
        mostrarAhorcado();
    }
}

ingresarLetra=function(){
    let letra=recuperarTexto("txtLetra");
    if (esMayuscula(letra)){
        validar(letra)
        intentos++;
        if(coincidencias==5){
            mostrarImagen("ahorcadoImagen","ganador.gif")
        }else{
            if(intentos==10){
                mostrarImagen("ahorcadoImagen","gameOver.gif")
            }
        }
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS")
    }

}

mostrarAhorcado=function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png")
    }else if(errores==2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png")
    }else if(errores==3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png")
    }else if(errores==4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png")
    }else if(errores==5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png")
    }else if(errores==6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png")
    }else if(errores==7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png")
    }else if(errores==8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png")
    }else if(errores==9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png")
    }
}
