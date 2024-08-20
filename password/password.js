let mensajesError="";
let errorLongitud="";
let errorMayuscula="";
let errorDigito="";
let errorCaracterEspecial="";

ejecutarValidacion=function(){
    let password=recuperarTexto("txtPassword")
    let errores=validarPassword(password);
    if(errores==""){
        mostrarTexto("lblResultado","PASSWORD CORRECTO");
    }else{
        mostrarTexto("lblResultado",errores);
    }

}
validarPassword=function(password){
    let tamanio=password.length;
    if(validarLongitud(tamanio)){
        if(validarMayuscula(password) & validarDigito(password) & validarCaracterEspecial(password)){
            mensajesError=""
        }
    }
    mensajesError=errorLongitud+errorMayuscula+errorDigito+errorCaracterEspecial
    return mensajesError
}

validarLongitud=function(tamanio){
    let longitudCorrecta;
    if(tamanio<8){
        longitudCorrecta=false
        errorLongitud="La password debe tener una longitud minima de 8 caracteres. "
    }else if(tamanio>16){
        longitudCorrecta=false
        errorLongitud="La password debe tener una longitud maxima de 16 caracteres. "
    }else{
        longitudCorrecta=true;
        errorLongitud="";
    }
    return longitudCorrecta
}

validarMayuscula=function(password){
    let letra;
    let contadorMayusculas=0;
    let existeMayusculas;
    for (let i = 0; i < password.length; i++) {
        letra = password.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++;
        }
    }
    if(contadorMayusculas>=1){
        existeMayusculas=true
        errorMayuscula="";
    }else{
        existeMayusculas=false
        errorMayuscula="La password debe tener por lo menos una letra mayuscula. "
    }
    return existeMayusculas
}
validarDigito=function(password){
    let letra;
    let contadorDigitos=0;
    let existeDigitos;
    for (let i = 0; i < password.length; i++) {
        letra = password.charAt(i);
        if(esDigito(letra)){
            contadorDigitos++;
        }
    }
    if(contadorDigitos>=1){
        existeDigitos=true
        errorDigito="";
    }else{
        existeDigitos=false
        errorDigito="Debe tener por lo menos un digito"
    }
    return existeDigitos
}
validarCaracterEspecial=function(password){
    let letra;
    let contadorCaracterEspecial=0;
    let existeCaracter;
    for (let i = 0; i < password.length; i++) {
        letra = password.charAt(i);
        if(letra=="*" || letra=="-" || letra=="_"){
            contadorCaracterEspecial++;
        }
    }
    if(contadorCaracterEspecial>=1){
        existeCaracter=true
        errorCaracterEspecial="";
    }else{
        existeCaracter=false
        errorCaracterEspecial="Debe tener por lo menos uno de estos caracteres especiales: asterisco(*), guion medio(-), guion bajo(_) . "
    }
    return existeCaracter
}