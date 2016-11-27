(function (){

  'use strict';

  let blogControllers = angular.module('blog.controllers', []);

  blogControllers.controller('ArchiveController', ['URL', '$http', '$scope', function(URL, $http, $scope) {

    $http.get(URL)
          .then(function(response) {
            $scope.posts = response.data;
          })
    $scope.posts = [];

  }]);

  blogControllers.controller('PostController', ['URL', '$http', '$routeParams', '$scope', function(URL, $http, $routeParams, $scope) {
    $http.get(URL + '/' + $routeParams.id)
          .then(function(response){
            $scope.post = response.data; console.log(URL);
          });
  }]);

}());
