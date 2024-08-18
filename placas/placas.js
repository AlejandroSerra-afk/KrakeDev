
validarPlaca=function(){
    let valorIngresado=recuperarTexto("txtPlaca")
    let erroresEstructura=validarEstructura(valorIngresado);
    let provincia;
    let tipo;
    let diaPicoYPlaca;

    if(erroresEstructura==null){
        mostrarTexto("lblValido","ESTRUCTURA VALIDA");
        provincia=obtenerProvincia(valorIngresado);
        tipo=obtenerTipoVehiculo(valorIngresado);
        diaPicoYPlaca=obtenerDiaPicoYPlaca(valorIngresado);

        if(provincia!=null){
            mostrarTexto("lblProvincia",provincia);
        }else{
            mostrarTexto("lblProvincia","Provincia Incorrecta");
        }
        if(tipo!=null){
            mostrarTexto("lblTipoVehiculo",tipo);
        }else{
            mostrarTexto("lblTipoVehiculo","Vehiculo Incorrecto");
        }
        mostrarTexto("lblDiaPicoYPlaca",diaPicoYPlaca);
    }else{
        mostrarTexto("lblValido","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura)
    }
}

limpiar=function(){
    mostrarTextoEnCaja("txtPlaca","")
    mostrarTexto("lblValido","");
    mostrarTexto("lblErrores","");
    mostrarTexto("lblTipoVehiculo","");
    mostrarTexto("lblDiaPicoYPlaca","");
    mostrarTexto("lblProvincia","");
}