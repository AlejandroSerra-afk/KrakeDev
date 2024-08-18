
let errorLongitud="";
let errorPrimerCaracter="";
let errorSegundoCaracter="";
let errorTercerCaracter="";
let errorCuartoCaracter="";
let errorQuintoCaracter="";
let errorSextoCaracter="";
let errorSeptimoCaracter="";
let errorOctavoCaracter="";

validarEstructura=function(placa){
    let longitud=placa.length;
    let primerCaracter=placa.charAt(0);
    let segundoCaracter=placa.charAt(1);
    let tercerCaracter=placa.charAt(2);
    let cuartoCaracter=placa.charAt(3);
    let quintoCaracter=placa.charAt(4);
    let sextoCaracter=placa.charAt(5);
    let septimoCaracter=placa.charAt(6);
    let errorConcatenado
    
    
    if(longitud==7){
        errorLongitud="";
        if( validarPrimerCaracter(primerCaracter) & validarSegundoCaracter(segundoCaracter) & validarTercerCaracter(tercerCaracter) & validarCuartoCaracter(cuartoCaracter) & validarQuintoCaracter(quintoCaracter) & validarSextoCaracter(sextoCaracter) & validarSeptimoCaracter(septimoCaracter)){
            return null;
        }
    }else if(longitud==8){
        let octavoCaracter=placa.charAt(7);
        if( validarPrimerCaracter(primerCaracter) & validarSegundoCaracter(segundoCaracter) & validarTercerCaracter(tercerCaracter) & validarCuartoCaracter(cuartoCaracter) & validarQuintoCaracter(quintoCaracter) & validarSextoCaracter(sextoCaracter) & validarSeptimoCaracter(septimoCaracter) & validarOctavoCaracter(octavoCaracter)){
            return null;
        }
    }else{
        errorLongitud="La longitud de la placa debe ser de 7 u 8 carcateres. "
    }
    errorConcatenado=errorLongitud+errorPrimerCaracter+errorSegundoCaracter+errorTercerCaracter+errorCuartoCaracter+errorQuintoCaracter+errorSextoCaracter+errorSeptimoCaracter+errorOctavoCaracter;
    return errorConcatenado;
}

validarPrimerCaracter=function(caracter){
    if(esMayuscula(caracter)){
        errorPrimerCaracter=""
        return true
    }else{
        errorPrimerCaracter="El primer caracter debe ser una letra Mayuscula. "
        return false
    }
}
validarSegundoCaracter=function(caracter){
    if(esMayuscula(caracter)){
        errorSegundoCaracter=""
        return true
    }else{
        errorSegundoCaracter="El segundo caracter debe ser una letra Mayuscula. "
        return false
    }
}
validarTercerCaracter=function(caracter){
    if(esMayuscula(caracter)){
        errorTercerCaracter=""
        return true
    }else{
        errorTercerCaracter="El tercer caracter debe ser una letra Mayuscula. "
        return false
    }
}
validarCuartoCaracter=function(caracter){
    if(esGuion(caracter)){
        errorCuartoCaracter=""
        return true
    }else{
        errorCuartoCaracter="El cuarto caracter debe ser un guion. "
        return false
    }
}
validarQuintoCaracter=function(caracter){
    if(esDigito(caracter)){
        errorQuintoCaracter=""
        return true
    }else{
        errorQuintoCaracter="El quinto caracter debe ser un digito. "
        return false
    }
}
validarSextoCaracter=function(caracter){
    if(esDigito(caracter)){
        errorSextoCaracter="";
        return true
    }else{
        errorSextoCaracter="El sexto caracter debe ser un digito. "
        return false
    }
}
validarSeptimoCaracter=function(caracter){
    if(esDigito(caracter)){
        errorSeptimoCaracter="";
        return true
    }else{
        errorSeptimoCaracter="El septimo caracter debe ser un digito. "
        return false
    }
}
validarOctavoCaracter=function(caracter){
    if(esDigito(caracter)){
        errorOctavoCaracter="";
        return true
    }else{
        errorOctavoCaracter="El octavo caracter debe ser un digito. "
        return false
    }
}
