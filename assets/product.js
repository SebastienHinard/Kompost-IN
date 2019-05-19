//controller productController
coinLectureApp.controller('productController', function ($scope, $routeParams, $rootScope, $location ,$sanitize) {
    $scope.index = $routeParams.id;
    $scope.ID = $rootScope.books[$scope.index].ID;
    $scope.Nom = $rootScope.books[$scope.index].Nom;
    $scope.Auteur = $rootScope.books[$scope.index].Auteur;
    $scope.Prix = $rootScope.books[$scope.index].Prix;
    $scope.LienPhoto = $rootScope.books[$scope.index].LienPhoto;
    $scope.Categorie = $rootScope.books[$scope.index].Categorie;
    $scope.Description = $rootScope.books[$scope.index].Description;
    $scope.Rating = $rootScope.books[$scope.index].Rating;
    $scope.NrPages = $rootScope.books[$scope.index].NrPages;
    $scope.Format = $rootScope.books[$scope.index].Format;
    $scope.Code = $rootScope.books[$scope.index].Code;
    // function Rating
    $scope.displayStars = function(rating){
        var stars='';
        var count = 0;

        for(var i = 0; i < rating; i++){
            stars += '<i class="fas fa-star tx7"></i>';
            count ++;
        }
        var greyStar=5-i;
        for(var i = 0; i < greyStar; i++){
            stars += '<i class="fas fa-star tx5"></i>';
            count ++;
        }        
        console.log('stars: ' + stars);
        return stars;
        
    };
});