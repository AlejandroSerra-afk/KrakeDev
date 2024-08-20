//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta;

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
