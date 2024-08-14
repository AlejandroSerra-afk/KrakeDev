
calcularTasaIntereses=function(ingresoAnual){
    let tasaInteres;

    if(ingresoAnual<300000){
        tasaInteres=16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasaInteres=15;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasaInteres=14;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasaInteres=13;
    }else if(ingresoAnual>=2000000){
        tasaInteres=12;
    }
    return tasaInteres;
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let cuotaMensual;
    let total=ingresos-egresos;

    if(edad>50){
        cuotaMensual=total*30/100;
    }else if(edad<=50){
        cuotaMensual=total*40/100;
    }
    return cuotaMensual;
}

calcularDescuento=function(precio,cantidad){
    let precioDesct;
    let precioTotal;

    if(cantidad<3){
        precio=precio;
    }else if(cantidad>=3 && cantidad<=5){
        precioDesct=precio*2/100;
        precioTotal=precio-precioDesct;
    }else if(cantidad>=6 && cantidad<=11){
        precioDesct=precio*3/100;
        precioTotal=precio-precioDesct;
    }else if(cantidad>=12){
        precioDesct=precio*4/100;
        precioTotal=precio-precioDesct;
    }
    return precioTotal;
}

determinarColesterolLDL=function(nivelColesterol){
    let colesterolLDL;

    if(nivelColesterol<100){
        colesterolLDL="Su nivel de colesterol LDL es Óptimo (lo mejor para su salud)"
    }else if(nivelColesterol>=100 && nivelColesterol<130){
        colesterolLDL="Su nivel de colesterol LDL es Casi óptimo"
    }else if(nivelColesterol>=130 && nivelColesterol<160){
        colesterolLDL="Su nivel de colesterol LDL esta en el Límite superior del rango normal"
    }else if(nivelColesterol>=160 && nivelColesterol<190){
        colesterolLDL="Su nivel de colesterol LDL es Alto"
    }else if(nivelColesterol>=190){
        colesterolLDL="Su nivel de colesterol LDL es muy Alto"
    }
    return colesterolLDL;
}

validarClave=function(clave){
    let tamanio=clave.length;
    
    if(tamanio>=8 && tamanio<=16){
        return true
    }else{
        return false
    }
}

esMayuscula=function(caracter){
    let codigoCaracter=caracter.charCodeAt(0);
    if(codigoCaracter>=65 && codigoCaracter<=90){
        return true;
    }else{
        return false;
    }
}

esMinuscula=function(caracter){
    let codigoCaracter=caracter.charCodeAt(0);
    if(codigoCaracter>=97 && codigoCaracter<=122){
        return true;
    }else if(codigoCaracter>=160 && codigoCaracter<=163){
        return true;
    }else if(codigoCaracter==130){
        return true;
    }else{
        return false;
    }
}

esDigito=function(caracter){
    let codigoCaracter=caracter.charCodeAt(0);
    if(codigoCaracter>=48 && codigoCaracter<=57){
        return true;
    }else{
        return false;
    }
}

darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 ||notaGeometria>90){
        return true
    }else{
        return false
    }
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90){
        if(notaGeometria>80){
            return true
        }
    }else{
        return false
    }
}

dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 ||notaGeometria>90){
        if(notaFisica>notaMatematica){
            return true
        }
    }else{
        return false
    }
}
