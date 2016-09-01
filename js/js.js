$(document).ready(function(){
  // Arreglo inicializado vacío
  var initialArray = [];

  $('#form').on('submit',function(e){
    // Dispara las validaciones del formulario
    this.checkValidity();
    // Evitamos la accion por defecto del botton
    e.preventDefault();

    // Función que añade un valor al arreglo
    function addItem(){

      var enteredNumberList = document.getElementById('enteredNumberList');
      // Obtengo el valor capturado del input
      var enteredNumber = document.getElementById('enteredNumber').value;
      /* Variable que será true cuando el valor ingresado sea igual a un
       valor almacenado dentro del arreglo initialArray */
      var repeatValue = false;
      // Variable que almacenará la etiqueta de lista y la variable capturada del input
      var listNumber = '<li>'+ enteredNumber +'</li>';

      // Si, nuestro arreglo este vacío
      if(initialArray.length === 0){
        // Añade el valor capturado al arreglo
        initialArray.push(enteredNumber);
        // El valor capturado sera añadido en el viewport dentro de una etiqueta de lista
        enteredNumberList.innerHTML += listNumber;
      //sino
      }else{
         // initialArray.length-1 por que la primera posicion de un arreglo es 0
         for (var i=0 ; i<=initialArray.length-1; i++){
           /* Si el valor capturado por el input es igual a un valor que existe
              dentro del arreglo initialArray */
           if(enteredNumber === initialArray[i]){
             // La variable repeatValue pasa a verdadero y enviamos una alerta
             repeatValue = true;
             alert('Número Repetido');
           }
         }
         /* Si la viariable repeatValue sige en false, quiere decir que el valor optenido 
            por el input no tuvo ninguna coincidencia con algun valor del arreglo */
         if(repeatValue === false) {
            // Añade el valor obtenido por el input al arreglo initialArray
            initialArray.push(enteredNumber);
            // El valor capturado sera añadido en el viewport dentro de una etiqueta de lista
            enteredNumberList.innerHTML +=  listNumber;
         }
      }
    }
    addItem();
  });

  $('#btnOrderNumber').on('click',function(e){
    // Evitamos la accion por defecto del botton
    e.preventDefault();
    // Función compare ordena el arreglo de modo ascendente
    function compare(a, b){

      return a-b;
    }
    /* Con el metodo .sort ordenamos el arreglo y para un ordenamiento
       optimo le pasamos un función callback de nombre campare */
    var orderNumber = initialArray.sort(compare);
    var numberOrderedList = document.getElementById('numberOrderedList');

    for (var i = 0; i<=orderNumber.length-1; i++){
      // El valor capturado sera añadido en el viewport dentro de una etiqueta de lista
      numberOrderedList.innerHTML += '<li>'+ orderNumber[i] + '</li>';
    }

  });

  $('#btnReset').on('click', function(){
    // Vaciamos el arreglo, dejandolo en 0
    initialArray.length = 0;
    /* eliminamos del viewport los numeros que fueron ingresados y tambien
       los que fueron ordenados ascendentemente */
    $('li').remove();
  });
});
