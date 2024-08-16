calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    let valorMenosDescuento;
    let ivaRedondeado;
    let ivaRedondeadoFloat;
    let resumen;

    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");
    //4. Recuperar el porcentaje de descuento como int
    //porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");

    if (esProductoValido(nombreProducto, "lblErrorProducto") & esCantidadValida(cantidad, "lblErrorCantidad") & esPrecioValido(precioProducto, "lblErrorPrecio")) {



        //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
        // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
        // los parametros cuando invoca la funcion.
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        //5. Mostrar valorSubtotal en el componente lblSubtotal
        // Utilizar mostrarTexto
        /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
        mostrarTexto("lblSubtotal", valorSubtotal);
        //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        //7. Mostrar el resultado en el componente lblDescuento
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10
                - Descuento esperado: 5.4
            Si el caso de prueba es exitoso, hacer un commit
         */
        mostrarTexto("lblDescuento", valorDescuento);
        //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
        // El IVA debe calcularse sobre el valor del subtotal menos el descuento
        valorMenosDescuento = valorSubtotal - valorDescuento
        valorIVA = calcularIVA(valorMenosDescuento);
        ivaRedondeado = valorIVA.toFixed(3);
        //9. Mostrar el resultado en el componente lblValorIVA    
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */
        mostrarTexto("lblValorIVA", ivaRedondeado);
        //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
        ivaRedondeadoFloat = parseFloat(ivaRedondeado)
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, ivaRedondeadoFloat);
        //11. Mostrar el resultado en el componente lblTotal
        /*
            Caso de prueba: 
                - cantidad: 10
                - precioProducto: 5.4 
                - descuento: 10
    
                    --valorSubtotal: 5.4
                    --descuento: 5.4
                    --IVA: 5.832
    
                    Total esperado: 54.432
    
                    Si el caso de prueba es exitoso, hacer un commit
           */
        mostrarTexto("lblTotal", valorTotal);
        //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
        /*
            Ejemplo: 
                Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
            Si funciona, hacer un commit
        */
        //resumen="Valor a pagar por "+cantidad+" "+nombreProducto+" con "+porcentajeDescuento+"% de descuento: USD "+valorTotal
        //mostrarTexto("lblResumen",resumen);
    }
}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTextoEnCaja("txtPrecio", "");
    mostrarTextoEnCaja("txtPorcentajeDescuento", "");

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "")
    mostrarTexto("lblErrorProducto", "");
    mostrarTexto("lblErrorCantidad", "");
    mostrarTexto("lblErrorPrecio", "");
}
/* SI TODO FUNCIONA, HACER UN PUSH */
esProductoValido = function (producto, idComponenteError) {
    let hayErrores = false;
    let tamanio = producto.length;

    if (producto == "") {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO")
        hayErrores = true
    }
    if (tamanio > 10) {
        mostrarTexto(idComponenteError, "EL NOMBRE DEL PRODUCTO NO PUEDE TENER MAS DE 10 CARACTERES")
        hayErrores = true
    }
    if(hayErrores==false){
        mostrarTexto(idComponenteError, "")
    }
    return !hayErrores;
}
esCantidadValida = function (cantidad, idComponenteError) {
    let hayErrores = false;
    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO")
        hayErrores = true
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponenteError, "LA CANTIDAD DEBE SER UN NUMERO ENTRE 0 Y 100")
        hayErrores = true
    }
    if(hayErrores==false){
        mostrarTexto(idComponenteError, "")
    }
    return !hayErrores;
}
esPrecioValido = function (precio, idComponenteError) {
    let hayErrores = false;
    if (isNaN(precio)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO")
        hayErrores = true
    }
    if (precio < 0 || precio > 50) {
        mostrarTexto(idComponenteError, "EL PRECIO DEBE SER UN NUMERO ENTRE 0 Y 50")
        hayErrores = true
    }
    if(hayErrores==false){
        mostrarTexto(idComponenteError, "")
    }
    return !hayErrores;
}