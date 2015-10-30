'use strict';
var app = angular.module('myApp', []);

app.controller("NameController", function ($scope) {
    $scope.person = {firstName: 'Peter', lastName: 'Smith'};
});

app.filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});

app.filter('name', function () {

    return function (person) {
        var lnameFname = person.lastName + ", " + person.firstName;
        return lnameFname;
    };
});

app.directive("loginForm", function () {
    return{
        restrict: 'AE',
        templateUrl: 'format.html'
    };

});

app.factory('myService', function () {

    return{
        
    };

});
