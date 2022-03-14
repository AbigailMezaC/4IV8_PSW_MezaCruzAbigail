function validar(e){
    var teclado = (document.all)?e.KeyCode : e.which

    if(teclado==8) return true;
    var patron = /[0-9\d .]/;

    var probar = String.fromCharCode(teclado);

    return patron.test(probar);
}

function descuento(){
    var dinero = document.formulario3.cantidad.value;
    
    var dnr = parseInt(dinero);

    var desc = dnr*0.15;

    document.formulario3.descuen.value = "$" + desc;
}

function precioT(){

    var dinero = document.formulario3.cantidad.value;
    
    var dnr = parseInt(dinero);

    var desc = dnr*0.15;

    var aPagar = dnr - desc

    document.formulario3.totalC.value = "$" + aPagar;
}

function borrar(){
    document.formulario3.descuen.value = "";
    document.formulario3.cantidad.value = "";
    document.formulario3.totalC.value = "";
}