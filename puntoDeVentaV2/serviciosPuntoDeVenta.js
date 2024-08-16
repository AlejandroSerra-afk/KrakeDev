
calcularValorDescuento=function(monto,porcentajeDescuento){
    let valorDescuento=monto*porcentajeDescuento/100;
    return valorDescuento;
}

calcularIVA= function(monto){
    let valorIVA=monto*12/100;
    return valorIVA;
}

calcularSubtotal= function(precio,cantidad){
    let totalPagar=precio*cantidad;
    return totalPagar
}

calcularTotal=function(subtotal,descuento,iva){
    let valorTotal= subtotal-descuento+iva
    return valorTotal
}

calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let precioDesct;

    if(cantidad<3){
        precioDesct=subtotal;
    }else if(cantidad>=3 && cantidad<=5){
        precioDesct=subtotal*3/100;
    }else if(cantidad>=6 && cantidad<=11){
        precioDesct=subtotal*4/100;
    }else if(cantidad>=12){
        precioDesct=subtotal*5/100;
    }
    return precioDesct;
}