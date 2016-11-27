(function() {

  'use strict';

  let blog = angular.module("blog", ["ngRoute", "blog.controllers"]);

  blog
  .constant("URL", "https://jsonplaceholder.typicode.com/posts")
  .config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider) {

      $httpProvider.defaults.cache = true;

      $routeProvider
          .when("/", {
              controller: "ArchiveController",
              templateUrl: "views/archive-posts.html"
          })
          .when("/blog/:id", {
              controller: "PostController",
              templateUrl: "views/single-post.html"
          })
          .otherwise({
              redirectTo: "/"
          });

  }]);

})();
