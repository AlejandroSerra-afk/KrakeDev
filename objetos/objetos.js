

probarAtributos=function(){
    let persona ={
        nombre : "Alejo",
        apellido : "Morales",
        edad : 24 ,
        estaVivo : true
    }

    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==true){
        console.log("Esta vivo")
    }else{
        console.log("No esta vivo")
    }
}

crearProducto=function(){
    let producto1={
        nombre:"Chocolates",
        precio:2.50,
        stock:15
    }
    let producto2={
        nombre:"Teclados",
        precio:15.75,
        stock:51
    }
    console.log(producto1.nombre); //Paso 3
    console.log(producto2.precio); //Paso 4
    if(producto1.stock<producto2.stock){
        console.log("Producto 2:"+producto2.nombre+" tiene mayor stock ")
    }else if (producto1.stock>producto2.stock){
        console.log("Producto 1:"+producto1.nombre+" tiene mayor stock ")
    }else{
        console.log("Ambos productos tienen el mismo stock ")
    }
}

modificarAtributos=function(){
    let cuenta ={
        numero:"234567234567",
        saldo:0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo)
}

crearCliente=function(){
    let cliente={
        cedula:"23456778989",
        nombre:"Juaneis"
    }
    let cliente1={}
    cliente1.nombre="Romeo";
    cliente1.apellido="Salcedo";
    cliente1.cedula="234567123456"
}

probarIncrementoSaldo=function(){
    let cta={numero:"345678347",saldo:35.5}
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}

probarDeterminarMayor=function(){
    let per1={nombre:"Alex",edad:45}
    let per2={nombre:"Sebas",edad:48}
    let mayor=determinarMayor(per1,per2);
    if(mayor!=null){
        console.log("El mayor es: "+mayor.nombre);
    }
}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1
    }else if (persona1.edad<persona2.edad){
        return persona2
    }else{
        return null
    }
}