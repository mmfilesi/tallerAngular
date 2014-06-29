/*===============================================
Controladores del módulo moduloPrimerosPasos
================================================*/

/* controladores primeros pasos */

moduloPrimerosPasos.controller("cHeader", function($scope) {
    $scope.titular           = "Taller de Ángular";
    $scope.textoPresentacion = "Prácticas del taller";
    $scope.textoBind         = "Y esto es un párrafo con bind";
});

moduloPrimerosPasos.controller("cEnlacesMain", function($scope) {
    $scope.enlaces = [
                    { key:'primeraPractica', value:'Primera práctica: input con formulario' },
                    { key:'segundaPractica', value:'Segunda práctica: rutas' }
                    ];
});

moduloPrimerosPasos.controller("pruebaEventos", function($scope) {
    $scope.miFuncion = function () {
        alert('Hola Mundo');
    }
});

/* controladores primera práctica */

moduloPrimerosPasos.controller("cInputDinamicos", function($scope) {

    $scope.titular    ="Biblioteca";
    $scope.subtitular ="Ejemplo para la primera práctica";
    
    $scope.librosBiblioteca = [
                               {libro:'La Ilíada', autor:'Homero'},
                               {libro:'La conjura de los necios', autor:'Kennedy Toole'},
                               {libro:'La Divina Comedia', autor:'Dante'} 
                               ];

    $scope.addLibro = function() {
        $scope.librosBiblioteca.push({libro:$scope.inputLibro, autor:$scope.inputAutor});
    }                           
    
});


