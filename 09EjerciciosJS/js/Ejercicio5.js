function validar(e){
    var teclado = (document.all)?e.KeyCode : e.which

    if(teclado==8) return true;
    var patron = /[0-9\d .]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);
}

function porcentajes(){
    var totalAlum = document.formulario5.cantidadT.value;
    var totalAlumnas = document.formulario5.cantidadM.value;
    var totalAlumnos = document.formulario5.cantidadH.value;
    
    var tA = parseInt(totalAlum);
    var tAlumnas = parseInt(totalAlumnas);
    var tAlumnos = parseInt(totalAlumnos);

    var porM = tAlumnas*100;
    var totalNa = porM/tA;

    var porH = tAlumnos*100;
    var totalNo = porH/tA;

    document.formulario5.totalM.value = totalNa + "% de Alumnas";
    document.formulario5.totalH.value = totalNo + "% de Alumnos";
}

function borrar(){
    document.formulario5.cantidadT.value = "";
    document.formulario5.cantidadM.value = "";
    document.formulario5.cantidadH.value = "";
    document.formulario5.totalM.value = "";
    document.formulario5.totalH.value = "";
}