function validar(e){
    var teclado = (document.all)?e.KeyCode : e.which

    if(teclado==8) return true;
    var patron = /[0-9\d .]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);
}

function promedioC(){
    var parcialU = document.formulario4.parU.value;
    var parcialD = document.formulario4.parD.value;
    var parcialT = document.formulario4.parT.value;
    
    var prU = parseInt(parcialU);
    var prD = parseInt(parcialD);
    var prT = parseInt(parcialT);

    var suma = prU + prD + prT;

    var prom = suma/3;

    document.formulario4.promC.value = prom;
}

function califf(){
    var parcialU = document.formulario4.parU.value;
    var parcialD = document.formulario4.parD.value;
    var parcialT = document.formulario4.parT.value;
    
    var prU = parseInt(parcialU);
    var prD = parseInt(parcialD);
    var prT = parseInt(parcialT);

    var suma = prU + prD + prT;

    var prom = suma/3;

    var caliF = document.formulario4.calF.value;
    var trabF = document.formulario4.traF.value;
    
    var clF = parseInt(caliF);
    var trF = parseInt(trabF);

    var porcentajeC = clF*0.30;

    var porcentajeT = trF*0.15;

    var porcentajeP = prom*0.55;

    var caliFinal = porcentajeC + porcentajeT + porcentajeP;

    document.formulario4.calificacionFinal.value = caliFinal;
}

function borrar(){
    document.formulario4.parU.value = "";
    document.formulario4.parD.value = "";
    document.formulario4.parT.value = "";
    document.formulario4.promC.value = "";
    document.formulario4.calF.value = "";
    document.formulario4.traF.value = "";
    document.formulario4.calificacionFinal.value = "";
}