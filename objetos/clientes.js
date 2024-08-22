let clientes=[
    {cedula:"2345678987654",nombre:"Juan",edad:24},
    {cedula:"7777777775655",nombre:"Luis",edad:48},
    {cedula:"3333333333333",nombre:"Maria",edad:18}
];

guardarCambios=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");
    let datosCliente={}
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad=valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();
}

modificarCliente=function(cliente){
    let clienteEncontrado=buscarCliente(cliente.cedula);
    if (clienteEncontrado!= null){
        clienteEncontrado.nombre=cliente.nombre
        clienteEncontrado.edad=cliente.edad;
    }
}

ejecutarBusqueda=function(){
    let cedulaBusqueda=recuperarTexto("txtCedulaBusqueda");
    let respuesta=buscarCliente(cedulaBusqueda);
    if (respuesta==null){
        alert("Cliente no Encontrado")
    }else{
        mostrarTextoEnCaja("txtCedula",respuesta.cedula);
        mostrarTextoEnCaja("txtNombre",respuesta.nombre);
        mostrarTextoEnCaja("txtEdad",respuesta.edad);
    }
}

crearCliente=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");
    let nuevoCliente={}
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;
    agregarCliente(nuevoCliente);
}

agregarCliente=function(cliente){
    let resultado=buscarCliente(cliente.cedula);
    if (resultado==null){
        clientes.push(cliente)
        alert("Cliente Agregado")
        mostrarClientes();
    }else{
        alert("Ya existe un cliente con esa cedula "+cliente.cedula)
    }
    
}

buscarCliente=function(cedula){
    let elementoCliente;
    let clienteEncontrado=null;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        if(elementoCliente.cedula==cedula){
            clienteEncontrado=elementoCliente;
            break;
        }
    }
    return clienteEncontrado
}

mostrarClientes=function(){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    let elementoCliente;
    for (let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        contenidoTabla+="<tr><td>"+elementoCliente.cedula+"</td>"+
        "<td>"+elementoCliente.nombre+"</td>"+
        "<td>"+elementoCliente.edad+"</td>"+
        "</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla
}