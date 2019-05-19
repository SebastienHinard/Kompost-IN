//controller home
coinLectureApp.controller('homeController', function ($rootScope, $scope, $http, $routeParams, $location) {
  $scope.category = $routeParams.cat;
  console.log($scope.category);
});
