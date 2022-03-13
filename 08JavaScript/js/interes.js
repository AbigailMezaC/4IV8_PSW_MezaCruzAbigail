//Función que se encargue de validar por espresión regular

function validarn(e){
    var teclado = (document.all)?e.KeyCode : e.which
    /*El ? es un operador que se ocupa para sustituir If
    Vamos a aplicar una prueba a todo el teclado a partir de un patrón.
    Este patrón debe ser numérico y solo acepta del 0-9 y los puntos. 
    Todo los demás los deja escapar.*/

    if(teclado==8) return true;
    var patron = /[0-9\d .]/;
    /*El código 8 significa que va a validar todo el teclado numérico y alfanumérico.
    La d significa que son dígitos y el punto significa que acepta puntos.
    Estudiar expersiones regulares.*/

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);
}

function interes(){
    var valor = document.formulario1.cantidad.value;
    
    //Tipo de dato
    var resul = parseInt(valor);

    var interes = resul*0.025;

    var total = resul + interes;

    //Vamos a imprimir el resultado

    document.formulario1.sueldoI.value = "$" + total;
}

function borrarD(){
    document.formulario1.sueldoI.value = "";
    document.formulario1.cantidad.value = "";
}