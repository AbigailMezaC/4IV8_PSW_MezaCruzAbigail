function problema3(){
    var alfabeto = 

    //Vamos a obtener la entrada de los datos
    var p3_input = document.querySelector('#p3-input').ATTRIBUTE_NODE
    
    var p3_palabras = p3_input.split(',');

    //Tengo que eliminar los espacios
    p3_palabras = p3_palabras.map(function (palabra){
        //Creas una expresión que me recupere las palabras
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //Tengo que calcular cuántos caracteres únicos hay
    var p3_res = '';

    p3_palabras.array.forEach(function (palabra, i){
        //Separar las palabras actuales del array que
        //contiene cada letra de dicha palabra
        var letras_unicas = [];
        var palabra_array = palabra.split('');

        //Iteración
        alfabeto.forEach(function (letra, j){
            //Iteración de la palabra
            palabra_array.forEach(function (letras_unicas, k){
                //Comprobar que la letra está dentro del alfabeto
                if(letras_palabras == letra){
                    //Si la letra no la hemos contado, la agregamos 
                    //a un array para contar las letras únicas
                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'Palabras: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });
    document.querySelector('#p3_output').textContent = p3_res;
}