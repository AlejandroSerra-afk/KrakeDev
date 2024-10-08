
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

obtenerProvincia=function(placa){
    let provincia;
    let primerCaracter=placa.charAt(0);
    if(primerCaracter=="A"){
        provincia="Azuay"
    }else if(primerCaracter=="B"){
        provincia="Bolivar"
    }else if(primerCaracter=="U"){
        provincia="Cañar"
    }else if(primerCaracter=="C"){
        provincia="Carchi"
    }else if(primerCaracter=="X"){
        provincia="Cotopaxi"
    }else if(primerCaracter=="H"){
        provincia="Chimborazo"
    }else if(primerCaracter=="O"){
        provincia="El Oro"
    }else if(primerCaracter=="E"){
        provincia="Esmeraldas"
    }else if(primerCaracter=="W"){
        provincia="Galapagos"
    }else if(primerCaracter=="G"){
        provincia="Guayas"
    }else if(primerCaracter=="I"){
        provincia="Imbabura"
    }else if(primerCaracter=="L"){
        provincia="Loja"
    }else if(primerCaracter=="R"){
        provincia="Los Rios"
    }else if(primerCaracter=="M"){
        provincia="Manabi"
    }else if(primerCaracter=="V"){
        provincia="Morona Santiago"
    }else if(primerCaracter=="N"){
        provincia="Napo"
    }else if(primerCaracter=="S"){
        provincia="Pastaza"
    }else if(primerCaracter=="P"){
        provincia="Pichincha"
    }else if(primerCaracter=="K"){
        provincia="Sucumbios"
    }else if(primerCaracter=="Q"){
        provincia="Orellana"
    }else if(primerCaracter=="T"){
        provincia="Tungurahua"
    }else if(primerCaracter=="Z"){
        provincia="Zamora Chinchipe"
    }else if(primerCaracter=="Y"){
        provincia="Santa Elena"
    }else{
        provincia=null
    }
    return provincia
}

obtenerTipoVehiculo=function(placa){
    let tipoVehiculo;
    let segundoCaracter=placa.charAt(1);
    if(segundoCaracter=="A" || segundoCaracter=="Z"){
        tipoVehiculo="Vehiculo Comercial"
    }else if(segundoCaracter=="E"){
        tipoVehiculo="Vehiculo Gubernamental"
    }else if(segundoCaracter=="X"){
        tipoVehiculo="Vehiculo De Uso Oficial"
    }else if(segundoCaracter=="S"){
        tipoVehiculo="Vehiculo Del Gobierno Provincial"
    }else if(segundoCaracter=="M"){
        tipoVehiculo="Vehiculo Municipal"
    }else{
        tipoVehiculo="Vehiculo Particular"
    }
    return tipoVehiculo
}

obtenerDiaPicoYPlaca=function(placa){
    let ultimaPosicion= placa.length -1;
    let UltimoCaracter=placa.charAt(ultimaPosicion);
    let diaPicoYPlaca;

    if(UltimoCaracter==1 || UltimoCaracter==2){
        diaPicoYPlaca="Lunes"
    }else if(UltimoCaracter==3 || UltimoCaracter==4){
        diaPicoYPlaca="Martes"
    }else if(UltimoCaracter==5 || UltimoCaracter==6){
        diaPicoYPlaca="Miercoles"
    }else if(UltimoCaracter==7 || UltimoCaracter==8){
        diaPicoYPlaca="Jueves"
    }else if(UltimoCaracter==9 || UltimoCaracter==0){
        diaPicoYPlaca="Viernes"
    }
    return diaPicoYPlaca
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
