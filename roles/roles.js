let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"2564891256",nombre:"Mario",apellido:"Ferrel",sueldo:700.0}
]
let esNuevo=false;

guardar=function(){
    let cedula=recuperarTexto("txtCedula");
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let sueldo= recuperarFloat("txtSueldo");
    let nuevo;
    if(validarCedula(cedula) & validarNombre(nombre) & validarApellido(apellido) & validarSueldo(sueldo)){
        if(esNuevo==true){
            let empleadoNuevo={};
            empleadoNuevo.cedula=cedula;
            empleadoNuevo.nombre=nombre;
            empleadoNuevo.apellido=apellido;
            empleadoNuevo.sueldo=sueldo;
            nuevo=agregarEmpleado(empleadoNuevo);
            if(nuevo==true){
                alert("EMPLEADO GUARDADO CORRECTAMENTE")
                mostrarEmpleados();
                deshabilitarIngreso();
                esNuevo=false
            }else{
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA "+ cedula);
                let empleadoEncontrado=buscarEmpleado(empleadoNuevo.cedula);
                if(empleadoEncontrado!=null){
                    empleadoEncontrado.nombre=empleadoNuevo.nombre;
                    empleadoEncontrado.apellido=empleadoNuevo.apellido;
                    empleadoEncontrado.sueldo=empleadoNuevo.sueldo;
                    alert("EMPLEADO MODIFICADO EXITOSAMENTE");
                    mostrarEmpleados();
                    deshabilitarIngreso();
                }
            }   
        }
    }

}

agregarEmpleado=function(empleado){
    let resultado=buscarEmpleado(empleado.cedula);
    let empleadoAgregado=false;
    if (resultado==null){
        empleados.push(empleado);
        empleadoAgregado=true;
    }else{
        empleadoAgregado=false
    }
    return empleadoAgregado;
}

buscarEmpleado=function(cedula){
    let empleado= null;
    let elementoEmpleado;
    for (let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i];
        if(elementoEmpleado.cedula==cedula){
            empleado=elementoEmpleado
        }
    }
    return empleado;
}

mostrarEmpleados=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>";
    let elementoEmpleado;
    for (let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i];
        contenidoTabla+="<tr><td>"+elementoEmpleado.cedula+"</td>"+
        "<td>"+elementoEmpleado.nombre+"</td>"+
        "<td>"+elementoEmpleado.apellido+"</td>"+
        "<td>"+elementoEmpleado.sueldo+"</td>"+
        "</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla
}

ejecutarNuevo=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    
    esNuevo=true;
}

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    deshabilitarIngreso();
    mostrarEmpleados();
}
mostrarOpcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado")
    ocultarComponente("divResumen")
}
mostrarOpcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol")
    ocultarComponente("divEmpleado")
}

validarCedula=function(cedula){
    let tamanio= cedula.length;
    let caracter;
    let cedulaValida=false;
    let nDigitos=0;
    if (tamanio==10){
        for (let i=0;i<tamanio;i++){
            caracter=cedula.charAt(i);
            if (esDigito(caracter)){
                nDigitos++;
            }
        }
        if (nDigitos==tamanio){
            cedulaValida=true;
            mostrarTexto("lblErrorCedula","")
        }else{
            mostrarTexto("lblErrorCedula","Todos los caracteres deben ser digitos. ")
            cedulaValida=false;
        }
        
            
    }else{
        if(cedula==""){
            mostrarTexto("lblErrorCedula","Campo Obligatorio. ")
        }else{
            mostrarTexto("lblErrorCedula","La cedula debe tener 10 digitos. ")
        }
    }
    return cedulaValida
}
validarNombre=function(nombre){
    let tamanio=nombre.length;
    let caracter;
    let nMayusculas=0;
    let nombreValido=false;

    if (tamanio>=3){
        for (let i=0;i<tamanio;i++){
            caracter=nombre.charAt(i);
            if (esMayuscula(caracter)){
                nMayusculas++;
            }
        }
        if(nMayusculas==tamanio){
            nombreValido=true
            mostrarTexto("lblErrorNombre","")
        }else{
            nombreValido=false
            mostrarTexto("lblErrorNombre","Todos los caracteres deben ser letras Mayusculas. ")
        }
    }else{
        if(nombre==""){
            mostrarTexto("lblErrorNombre","Campo Obligatorio. ")
        }else{
            mostrarTexto("lblErrorNombre","El nombre debe tener al menos 3 caracteres. ")
        }
    }
    return nombreValido;
}
validarApellido=function(apellido){
    let tamanio=apellido.length;
    let caracter;
    let nMayusculas=0;
    let apellidoValido=false;
    if (tamanio>=3){
        for (let i=0;i<tamanio;i++){
            caracter=apellido.charAt(i);
            if (esMayuscula(caracter)){
                nMayusculas++;
            }
        }
        if(nMayusculas==tamanio){
            apellidoValido=true
            mostrarTexto("lblErrorApellido","")
        }else{
            apellidoValido=false
            mostrarTexto("lblErrorApellido","Todos los caracteres deben ser letras Mayusculas. ")
        }
    }else{
        if(apellido==""){
            mostrarTexto("lblErrorApellido","Campo Obligatorio. ")
        }else{
            mostrarTexto("lblErrorApellido","El apellido debe tener al menos 3 caracteres. ")
        }
    }
    return apellidoValido
}
validarSueldo=function(sueldo){
    let sueldoValido=false;
    if(isNaN(sueldo)){
        mostrarTexto("lblErrorSueldo","Debe ingresar obligatoriamente un numero entre 400 y 5000. ")
    }else{
        if(sueldo<400){
            mostrarTexto("lblErrorSueldo","El sueldo debe ser minimo de 400$. ")
            sueldoValido=false;
        }else if (sueldo>5000){
            mostrarTexto("lblErrorSueldo","El sueldo debe ser maximo de 5000$. ")
            sueldoValido=false;
        }else{
            mostrarTexto("lblErrorSueldo","")
            sueldoValido=true
        }
    }
    return sueldoValido
}

deshabilitarIngreso=function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    mostrarTextoEnCaja("txtCedula","")
    mostrarTextoEnCaja("txtNombre","")
    mostrarTextoEnCaja("txtApellido","")
    mostrarTextoEnCaja("txtSueldo","")
}

ejecutarBusqueda=function(){
    let cedulaBusqueda=recuperarTexto("txtBusquedaCedula");
    let resultadoBusqueda=buscarEmpleado(cedulaBusqueda);
    if (resultadoBusqueda==null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTextoEnCaja("txtCedula",resultadoBusqueda.cedula);
        mostrarTextoEnCaja("txtNombre",resultadoBusqueda.nombre);
        mostrarTextoEnCaja("txtApellido",resultadoBusqueda.apellido);
        mostrarTextoEnCaja("txtSueldo",resultadoBusqueda.sueldo);
        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
    }
}