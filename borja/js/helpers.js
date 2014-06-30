//Filtro curtomizado | customFilter:'Nexus'
angular.module('angularTestFilters', []).filter('customFilter',function(){
   return function(items, name){
        var arrayToReturn = [];        
        for (var i=0; i<items.length; i++){
            if (items[i].name.indexOf(name)!=-1) {
                arrayToReturn.push(items[i]);
            }
        }
        
        return arrayToReturn;
    };
});