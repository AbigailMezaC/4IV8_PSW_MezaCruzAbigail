function validarn(e){
    var teclado = (document.all)?e.KeyCode : e.which

    if(teclado==8) return true;
    var patron = /[0-9\d .]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);
}

function ventaTotal(){
    var sueldoF = document.formulario2.sueldo.value;

    var sueldoFijo = parseInt(sueldoF);

    var comis = sueldoFijo*0.10;

    var tComis = comis*3;

    document.formulario2.ventasC.value = "$" + tComis;

    var ventaTot = sueldoFijo + tComis;

    document.formulario2.totalFinal.value = "$" + ventaTot;
}

function borrar(){
    document.formulario2.ventasC.value = "";
    document.formulario2.totalFinal.value = "";
    document.formulario2.sueldo.value = "";
    document.formulario2.venta1.value = "";
    document.formulario2.venta2.value = "";
    document.formulario2.venta3.value = "";
}
