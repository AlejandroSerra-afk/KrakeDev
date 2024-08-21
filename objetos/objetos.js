

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