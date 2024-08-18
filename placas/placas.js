
validarPlaca=function(){
    let valorIngresado=recuperarTexto("txtPlaca")
    let erroresEstructura=validarEstructura(valorIngresado);
    let provincia;

    if(erroresEstructura==null){
        mostrarTexto("lblValido","ESTRUCTURA VALIDA");
        provincia=obtenerProvincia(valorIngresado);
        if(provincia!=null){
            mostrarTexto("lblProvincia",provincia);
        }else{
            mostrarTexto("lblProvincia","Provincia Incorrecta");
        }
    }else{
        mostrarTexto("lblValido","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura)
    }
}