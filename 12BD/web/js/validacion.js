function registro() {
    var nom=document.getElementById('nombre').value;
    var app=document.getElementById('appat').value;
    var apm=document.getElementById('apmat').value;
    var bol=document.getElementById('boleta').value;
    var tel=document.getElementById('telefono').value;

    var letras= /[A-Za-z]+/g;
    var numeros=/[0-9\d .]/;

    if((nom=='')|| (app=='')||(apm=='')||(bol=='')||(tel=='')){
        alert("Debes de llenar todos los datos");
    } else if((!(nom.match(letras)))){
        alert("Introduce solo letras");

    }
    else if((!(app.match(letras)))){
        alert("Introduce solo letras");
        
    }
    else if((!(apm.match(letras)))){
        alert("Introduce solo letras");
        
    }else if((!(bol.match(numeros)))){
        alert("introduce solo numeros");
        
        
    }else if((!(tel.match(numeros)))){
        alert("Ingresa solo numeros");
    }
    else if(!(bol.length=10)){
        alert("La boleta solo tiene 10 numeros")
        
    }
    else if(!(tel.length=10)){
        alert("Los telefonos solo cuentan con 10 numeros")
    }
  
    else{
        document.formulario.submit();
    }
   }