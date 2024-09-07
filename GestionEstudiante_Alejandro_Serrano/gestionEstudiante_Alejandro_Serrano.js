let estudiantes=[];

crearEstudiante=function(){
    let nombre=recuperarTexto("txtNombre");
    let curso =recuperarTexto("txtCurso");
    let matriculaR=recuperarTexto("txtMatricula");
    let estudiante={};
    estudiante.nombre=nombre;
    estudiante.curso=curso;
    estudiante.matricula=matriculaR;
    return estudiante
}

agregarEstudiante=function(){
    estudianteCreado=crearEstudiante();
    estudiantes.push(estudianteCreado);
    console.log(estudiantes);
    refrescarEstudiante();
}

refrescarEstudiante=function(){
    let cmpTabla=document.getElementById("tablaEstudiantes");
    let contenidoTabla="<table><tr>"+
    "<th>NOMBRE</th>"+
    "<th>CURSO</th>"+
    "<th>MATRICULAS</th>"+
    "</tr>";
    let elementoEstudiante;
    for (let i=0;i<estudiantes.length;i++){
        elementoEstudiante=estudiantes[i];
        contenidoTabla+="<tr><td>"+elementoEstudiante.nombre+"</td>"+
        "<td>"+elementoEstudiante.curso+"</td>"+
        "<td>"+elementoEstudiante.matricula+"</td>"+
        "</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla
}
buscarEstudiante=function(){
    let estudianteIterado;
    let estudianteEncontrado=false;
    let nombre=recuperarTexto("txtIdentificador");
    for(let i=0;i<estudiantes.length;i++){
        estudianteIterado=estudiantes[i];
        if (estudianteIterado.nombre==nombre){
            estudianteEncontrado=true
        }
    }
    if(estudianteEncontrado==true){
        alert("ESTUDIANTE ENCONTRADO");
    }else{
        alert("ESTUDIANTE NO ENCONTRADO");
    }
}


recuperarTexto=function(idComponente){
    let componente=document.getElementById(idComponente);
    let valorIngresado=componente.value;
    return valorIngresado;
}