let personas=[
    {nombre:"Marcos",edad:18},
    {nombre:"Roberto",edad:15},
    {nombre:"Kate",edad:25},
    {nombre:"Diana",edad:12},
    {nombre:"Benja",edad:5},
]

agregarPersona=function(){
    let nombreR=recuperarTexto("txtNombre");
    let edadR=recuperarTexto("txtEdad");
    if (validarNombre(nombre) & validarEdad(edad)){
        let nuevaPersona={};
        nuevaPersona.nombre=nombreR;
        nuevaPersona.edad=edadR;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE ")
    }

}


validarNombre=function(nombre){
    let tamanio = nombre.length;
    let nombreValido=true;

    if (nombre == "") {
        mostrarTexto("lblErrorNombre", "CAMPO OBLIGATORIO");
        nombreValido=false
    }
    if (tamanio < 3) {
        mostrarTexto("lblErrorNombre", "EL NOMBRE DE LA PERSONA DEBE SER DE MINIMO 3 CARACTERES.");
        nombreValido=false
    }
    if(nombreValido==true){
        mostrarTexto("lblErrorNombre", "")
    }
    return nombreValido;
}
validarEdad = function (edad) {
    let edadValida = true;
    if (isNaN(cantidad)) {
        mostrarTexto("lblErrorEdad", "CAMPO OBLIGATORIO");
        edadValida = false;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto("lblErrorEdad", "LA EDAD DEBE SER UN NUMERO ENTRE 0 Y 100")
        edadValida = false;
    }
    if(edadValida==true){
        mostrarTexto("lblErrorEdad", "")
    }
    return edadValida;
}