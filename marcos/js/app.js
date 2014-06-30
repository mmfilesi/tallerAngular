/* Declaramos el módulo. Sus controladores están en controllers-primeros-pasos.js */
var moduloPrimerosPasos = angular.module('primerosPasos', ['ngRoute']);

moduloPrimerosPasos.config(function($routeProvider) {
    $routeProvider
    .when("/", {
    templateUrl : "templates/main.html",
    controller : "cMain"
    })
    .when("/primeraPractica", {
    templateUrl : "templates/primera-practica.html",
    controller : "cInputDinamicos"
    })
    .when("/segundaPractica", {
    templateUrl : "templates/segunda-practica.html",
    controller : "cEjemploVistaRuteada"
    })
    .otherwise({ reditrectTo : "/" });
});