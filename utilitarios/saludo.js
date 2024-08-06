saludar=function(){
    let nombre
    let apellido
    nombre=recuperarTexto("txtNombre");
    apellido=recuperarTexto("txtApellido");
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document .getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
    }