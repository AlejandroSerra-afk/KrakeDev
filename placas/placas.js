
validarPlaca=function(){
    let valorIngresado=recuperarTexto("txtPlaca")
    let erroresEstructura=validarEstructura(valorIngresado);
    let provincia;
    let tipo;

    if(erroresEstructura==null){
        mostrarTexto("lblValido","ESTRUCTURA VALIDA");
        provincia=obtenerProvincia(valorIngresado);
        tipo=obtenerTipoVehiculo(valorIngresado);
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
    }else{
        mostrarTexto("lblValido","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura)
    }
}