function validarn(e){
    var teclado = (document.all)?e.KeyCode : e.which

    if(teclado==8) return true;
    var patron = /[0-9\d .]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);
}

function ventas(){
    var vUno = document.formulario2.venta1.value;
    var vDos = document.formulario2.venta2.value;
    var vTres = document.formulario2.venta3.value;

    var vaU = parseInt(vUno);
    var vaD = parseInt(vDos);
    var vaT = parseInt(vTres);

    var vTotal = vaU + vaD + vaT;

    var comision = vTotal*0.10;

    var total = comision + vTotal;

    document.formulario2.ventasC.value = "$" + total;
}

function ventaTotal(){
    var sueldoU = document.formulario2.sueldo.value;

    var sueldoF = parseInt(sueldoU);

    var vUno = document.formulario2.venta1.value;
    var vDos = document.formulario2.venta2.value;
    var vTres = document.formulario2.venta3.value;

    var vaU = parseInt(vUno);
    var vaD = parseInt(vDos);
    var vaT = parseInt(vTres);

    var vTotal = vaU + vaD + vaT;

    var comision = vTotal*0.10;

    var total = comision + vTotal;

    var ventaTot = sueldoF + total;

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

