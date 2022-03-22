//Problema 1
function problema1(){
    //Obtener la entrada de datos
    var p1_input = document.querySelector('#p1-input').value;

    //El reverse sirve para invertir los elemenos (las palabras)
    var p1_array = p1_input.split(' ').reverse();

    //Inicializar la variable de la respuesta para después agregarla al array
    var p1_res = '';

    p1_array.forEach(function (palabra, i){
        //Definir donde agregar un espacio
        if(i != p1_array.length || i != 0)
        //Agregar el espacio
        p1_res += ' ';
        //Ir agregando las palabras
        p1_res += palabra;
    });
    document.querySelector('#p1-output').textContent = p1_res;
}

//Problema 2
function problema2(){
    //x1*y1 + x2*y2 + xN*yN = Producto escalar

    //Obtener el valor de cada vector
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    //Definir los vectores
    var vector1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var vector2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //Sort sirve para ordenar los elementos del vector de mayor a menor
    //Hacerlo con los dos vectores
    vector1 = vector1.sort(function (x, y){
        return x - y;
    });

    vector2 = vector2.sort(function (x, y){
        return x - y;
    });

    //Invertir el vector con reverse
    vector2 = vector2.reverse();

    //Sacar el PEM
    var p2_res = 0;
    var i = 0;

    for(i = 0; i < vector1.length; i++){
        p2_res += vector1[i]*vector2[i];
    }
    document.querySelector('#p2-output').textContent = 'Producto escalar mínimo: ' + p2_res;
}

//Problema 3
function problema3(){
    //Defenir un alfabeto
    var alfabeto = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N'
                    ,'Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    //Vamos a obtener la entrada de datos
    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //Tengo que eliminar los espacios
    p3_palabras = p3_palabras.map(function(palabra){
         //Crear una expresión que me recurpere las palabras
         return palabra.replace(/\s/g,'').toUpperCase();
    });

    //Tengo que calcular cuantos carácteres únicos hay
    var p3_res = '';

    p3_palabras.forEach(function (palabra, i){
         //Separar las palabras actuales del array que 
         //contiene cada letra de dicha palabra
         var letras_unicas = [];
         var palabra_array = palabra.split('');

         //Iteración
        alfabeto.forEach(function (letra, j){
           //Iteración de la palabra
           palabra_array.forEach(function (letras_palabras, k){
                //Comprobar que la letra está dentro del alafabeto 
                if(letras_palabras == letra){
                //Si la letra no la hemos contado, la agregamos a un 
                //array para contar las letras únicas
                if(letras_unicas.indexOf(letra)<0)
                letras_unicas.push(letra);
                }
           });  
        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });
    document.querySelector('#p3-output').textContent = p3_res;
}