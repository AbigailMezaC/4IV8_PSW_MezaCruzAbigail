function validar(e){
    var teclado = (document.all)?e.KeyCode : e.which

    if(teclado==8) return true;
    var patron = /[0-9\d .]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);
}

function calcEdad(){
    var aNacio = document.formulario6.aNacimiento.value;
    var mNacio = document.formulario6.mNacimiento.value;
    var dNacio = document.formulario6.dNacimiento.value;
    var aActu = document.formulario6.aActual.value;
    var mActu = document.formulario6.mActual.value;
    var dActu = document.formulario6.dActual.value;

    var aNac = parseInt(aNacio);
    var mNac = parseInt(mNacio);
    var dNac = parseInt(dNacio);
    var aAct = parseInt(aActu);
    var mAct = parseInt(mActu);
    var dAct = parseInt(dActu);

    var mayor = aAct - aNac;
    var menor = mayor - 1;

    if(aNac < aAct){
        alert("Añadiste datos incorrectos")
    }

    if(mNac > 12 || mAct > 12){
        alert("¡Solo hay 12 meses!");
    }
    
    if(dNac > 31 || dAct > 31){
        alert("!El mes tiene máximo 31 días¡")
    }

    if (mNac < mAct){ 
        document.formulario6.edad.value = mayor + " años";
    }else if (mNac > mAct){
        document.formulario6.edad.value = menor + " años";
    }else if (dNac < dAct){
        document.formulario6.edad.value = mayor + " años";
    }else if (dNac > dAct){
        document.formulario6.edad.value = menor + " años";
    }else{
        alert("Introduciste un dato incorrecto o te faltó algún dato por agregar");
    } 
}

function borrar(){
    document.formulario6.aNacimiento.value = "";
    document.formulario6.mNacimiento.value = "";
    document.formulario6.dNacimiento.value = "";
    document.formulario6.aActual.value = "";
    document.formulario6.mActual.value = "";
    document.formulario6.dActual.value = "";
    document.formulario6.edad.value = "";
}