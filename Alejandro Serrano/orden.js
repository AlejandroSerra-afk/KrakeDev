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
    if (validarNombre(nombreR) & validarEdad(edadR)){
        let nuevaPersona={};
        nuevaPersona.nombre=nombreR;
        nuevaPersona.edad=edadR;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE ")
        mostrarPersonas();
    }

}

mostrarPersonas=function(){
    let cmpTabla=document.getElementById("tablaResumen");
    let contenidoTabla="<table><tr>"+
    "<th>EDAD</th>"+
    "<th>NOMBRE</th>"+
    "</tr>";
    let elementoPersona;
    for (let i=0;i<personas.length;i++){
        elementoPersona=personas[i];
        contenidoTabla+="<tr><td>"+elementoPersona.edad+"</td>"+
        "<td>"+elementoPersona.nombre+"</td>"+
        "</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla
}

determinarMayor=function(){
    let mayor=encontrarMayor();
    mensaje=mayor.nombre+" con "+mayor.edad;
    mostrarTexto("lblMayor",mensaje)

}

encontrarMayor=function(){
    let personaMayor=personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length;i++){
        elementoPersona=personas[i];
        console.log(elementoPersona.nombre)
        console.log(elementoPersona.edad)
        if (elementoPersona.edad>personaMayor.edad){
            personaMayor=elementoPersona
        }
    }
    return personaMayor;
}
determinarMenor=function(){
    let mayor=encontrarMenor();
    mensaje=mayor.nombre+" con "+mayor.edad;
    mostrarTexto("lblMenor",mensaje)

}

encontrarMenor=function(){
    let personaMenor=personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length;i++){
        elementoPersona=personas[i];
        console.log(elementoPersona.nombre)
        console.log(elementoPersona.edad)
        if (elementoPersona.edad<personaMenor.edad){
            personaMenor=elementoPersona
        }
    }
    return personaMenor;
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
    if (edad==""){
        mostrarTexto("lblErrorEdad", "CAMPO OBLIGATORIO");
        edadValida = false;
    }
    if (isNaN(edad)) {
        mostrarTexto("lblErrorEdad", "DEBE INGRESAR UN NUMERO");
        edadValida = false;
    }
    if (edad < 0 || edad > 100) {
        mostrarTexto("lblErrorEdad", "LA EDAD DEBE SER UN NUMERO ENTRE 0 Y 100")
        edadValida = false;
    }
    if(edadValida==true){
        mostrarTexto("lblErrorEdad", "")
    }
    return edadValida;
}