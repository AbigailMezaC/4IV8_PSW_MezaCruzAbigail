function validar(e){
    var teclado = (document.all)?e.KeyCode : e.which

    if(teclado==8) return true;
    var patron = /[0-9\d .]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);
}

function ganancia(){
    var dinero = document.formulario1.cantidad.value;
    
    var resultado = parseFloat(dinero);

    var porcentaje = resultado*0.02;

    var total = resultado + porcentaje;

    document.formulario1.intMen.value = "$" + total;
}

function borrar(){
    document.formulario1.intMen.value = "";
    document.formulario1.cantidad.value = "";
}