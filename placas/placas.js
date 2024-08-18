
validarPlaca=function(){
    let valorIngresado=recuperarTexto("txtPlaca")
    let erroresEstructura=validarEstructura(valorIngresado);

    if(erroresEstructura==null){
        mostrarTexto("lblValido","ESTRUCTURA VALIDA");
    }else{
        mostrarTexto("lblValido","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErrores", erroresEstructura)
    }
}