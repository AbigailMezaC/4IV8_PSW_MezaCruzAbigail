/*
JavaScript es un lenguaje que posee un paradigma orientado a objetos y funciones, 
por tal motivo presenta una particularidad la cual es: NO TIPADO

Por lo que, no existe int, double, float, String, etc.
Dentro de JS, todo es VAR -> Variable

De acuerdo al estandar de ES6 se manejan 3 tipos de variables:
VAR -> Variable
LET -> Variable de tipo Protected
CONST -> Constante
*/

function validar(formulario){
    if(formulario.nombre.value.length < 5){
        alert("Escriba por lo menos 5 Caracteres para el nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"abcdefghijklmnopqrstuvwxyz";
    var checkStr = formulario.nombre.value;
    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba únicamente letras en el campo de Nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOK = "123456789";
    var checkStr = formulario.edad.value;
    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba únicamente números en el campo de Edad");
        formulario.edad.focus();
        return false;
    }

    /*
    Es necesario que busquen como crear expresiones regulares para poder 
    validar la entrada de datos y eso se puede en: developer.mozilla.org
    Sirve para validar una netada específica de datos como email, CURP, etc.
    */

    var txt = formulario.email.value;

    //Crear mi expresión

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email "+ (b.test(txt)?" ":"no")+" valido");
    return b.test;
}