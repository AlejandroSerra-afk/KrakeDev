
ejecutarPrueba1 = function () {
    let cadena = recuperarTexto("txtCadena");
    recorrerCadena(cadena);
}

ejecutarPrueba2 = function () {
    let cadena = recuperarTexto("txtCadena");
    let resultado = invertirCadena(cadena);
    mostrarTexto("lblResultado", resultado)
}

recorrerCadena = function (cadena) {
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion" + posicion);
    }
}

invertirCadena = function (cadena) {
    let caracter;
    let resultado = "";
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        caracter = cadena.charAt(posicion);
        resultado = resultado + caracter
    }
    return resultado;
}

buscarLetra = function (cadena, letra) {
    let letraIterada;
    let existeLetra = false;
    for (let i = 0; i < cadena.length; i++) {
        letraIterada = cadena.charAt(i);
        if (letraIterada == letra) {
            existeLetra = true
        }
    }
    if (existeLetra == true) {
        console.log("EXISTE")
    } else {
        console.log("NO EXISTE")
    }
}

contarMayusculas = function (cadena) {
    let letra;
    let contadorMayusculas=0;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++;
        }
    }
    console.log(contadorMayusculas)
}