
esMayuscula=function(caracter){
    let codigoCaracter=caracter.charCodeAt(0);
    if(codigoCaracter>=65 && codigoCaracter<=90){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    let codigoCaracter=caracter.charCodeAt(0);
    if(codigoCaracter>=48 && codigoCaracter<=57){
        return true;
    }else{
        return false;
    }
}

esGuion=function(caracter){
    let codigoCaracter=caracter.charCodeAt(0);
    if(codigoCaracter==45){
        return true;
    }else{
        return false;
    }
}