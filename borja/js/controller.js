var angularTestCtrl= angular.module('angularTestCtrl', []);

angularTestCtrl.controller('dataList', ['$scope', '$http',
  function($scope, $http) {
    //Obtencion de datos desde un archivo
    //Instalar servidor node: 
    /*
     *https://github.com/nodeapps/http-server
    */
    $http.get('js/data/data.json').success(function(data) {
      $scope.datos = data;
      $scope.temp= data;
    });

    $scope.openModal = function(){
      $scope.DisplayUpdate ='none';
      
    }

    $scope.createData = function(){
      $scope.datos.push({
        'name':this.data.name,
        'description':this.data.description
      });
      $scope.DisplayUpdate ='true';
    }

    $scope.closeModal = function(){
      $scope.DisplayUpdate ='true';
    }

    $scope.clear = function(){
      var input2 = document.getElementById('query2');
      input2.value = ''
    }

    
}]);

angularTestCtrl.controller('dataListSearch2', ['$scope', '$http',
  function($scope, $http) {
    //Obtencion de datos desde un archivo
    //Instalar servidor node: 
    /*
     *https://github.com/nodeapps/http-server
    */
    $http.get('js/data/data.json').success(function(data) {
      $scope.datos = data;
      $scope.temp= data;
    });

    $scope.openModal = function(){
      $scope.DisplayUpdate ='none';
      
    }

    $scope.createData = function(){
      $scope.datos.push({
        'name':this.data.name,
        'description':this.data.description
      });
      $scope.DisplayUpdate ='true';
    }

    $scope.closeModal = function(){
      $scope.DisplayUpdate ='true';
    }

    $scope.clear = function(){
      var input2 = document.getElementById('query2');
      input2.value = ''
    }

    
    //funcion de filtrado customizada, solo buscar en el nombre
    $scope.$watch('query', function(e) {
      if(e!=undefined){
        var items = $scope.temp;
        var arrayToReturn = [];
        for (var i=0; i<items.length; i++){
            if (items[i].name.toLowerCase().indexOf(e.toLowerCase())!=-1) {
                arrayToReturn.push(items[i]);
            }
        }
        $scope.datos = arrayToReturn;
      }
    });
}]);

angularTestCtrl.controller('dataListSearch3', ['$scope', '$http',
  function($scope, $http) {
    //Obtencion de datos desde un archivo
    //Instalar servidor node: 
    /*
     *https://github.com/nodeapps/http-server
    */
    $http.get('js/data/data.json').success(function(data) {
      $scope.datos = data;
      $scope.temp= data;
    });

    $scope.openModal = function(){
      $scope.DisplayUpdate ='none';
      
    }

    $scope.createData = function(){
      $scope.datos.push({
        'name':this.data.name,
        'description':this.data.description
      });
      $scope.DisplayUpdate ='true';
    }

    $scope.closeModal = function(){
      $scope.DisplayUpdate ='true';
    }

    $scope.clear = function(){
      var input2 = document.getElementById('query2');
      input2.value = ''
    }

    $scope.$watch('typeSearch', function(e) {
      if(e!=undefined){
        $scope.type = e;
      }
    })
    //funcion de filtrado customizada, depende de la opcion del select
    $scope.$watch('query2', function(e) {
      if(e!=undefined){
        var items = $scope.temp;
        var arrayToReturn = [];
        for (var i=0; i<items.length; i++){
          if($scope.type=='name')
            if (items[i].name.toLowerCase().indexOf(e.toLowerCase())!=-1) {
                arrayToReturn.push(items[i]);
            }
          if($scope.type=='description')
            if (items[i].description.toLowerCase().indexOf(e.toLowerCase())!=-1) {
                arrayToReturn.push(items[i]);
            }
          if($scope.type=='all')
            if (items[i].description.toLowerCase().indexOf(e.toLowerCase())!=-1 
              || items[i].name.toLowerCase().indexOf(e.toLowerCase())!=-1) {
                arrayToReturn.push(items[i]);
            }
        }
        if($scope.type)
        $scope.datos = arrayToReturn;
      }
    });
   
}]);