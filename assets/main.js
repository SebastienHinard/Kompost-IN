//declaration de l'app
var coinLectureApp = angular.module('coinLectureApp', ['ngRoute', 'ngSanitize']);
coinLectureApp.run(function ($rootScope, $http, $rootScope) {
    //je récupère le JSON
    $http.get("assets/json/json.json")
        .then(function (response) {
            // reponse.data renvoie le contenu de json.json dans la variable marques
            $rootScope.books = response.data;
        });
    //je créé mon tableau cartList (panier)
    $rootScope.cartList = [];
    $rootScope.articleCount = 0;
    $rootScope.cartList = [];
});
//config des routes
coinLectureApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home/:cat?', {
            controller: 'homeController',
            templateUrl: 'assets/partials/home.html'
        })
        // dans cette route, on récupère un paramêtre : id
        .when('/category', {
            controller: 'categoryController',
            templateUrl: 'assets/partials/category.html'
        })
        .when('/cart', {
            controller: 'cartController',
            templateUrl: 'assets/partials/cart.html'
        })
        .when('/product/:id?', {
            controller: 'productController',
            templateUrl: 'assets/partials/product.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
coinLectureApp.filter('euroFormat', function () {
    return function (input) {
        return input + ' \u20AC';
    };
});
coinLectureApp.controller('mainController', function ($rootScope, $scope, $http, $routeParams, $location) {
    // Lorsque le boutton appelle la fct ajoutPanier
    $scope.ajoutPanier = function (ID) {
        $scope.thisArticle=ID;
        console.log(ID);
        $('.addedArticle').modal('show');
        $rootScope.articleCount++;
        // On part du principe que l'article n'est pas dans le panier
        var articlePush = true;
        // On parcourt le panier
        for (var i = 0; i < $rootScope.cartList.length; i++) {
            // Si l'id de l'article parcouru correspond a celui qu'on va ajouter au tableau
            if ($rootScope.cartList[i].id == ID) {
                // On modifie seulement sa quantitée
                $rootScope.cartList[i].quantite++;
                // On indique qu'il ne faut pas le rajouter à la liste
                articlePush = false;
            }
        }
        // Si on peut l'ajouter à la liste
        if (articlePush) {
            // On créer un objet conportant l'id + la quantitée
            $scope.currentArticle = { "id": ID, "quantite": 1 }
            // On rajoute l'objet à la fin du tableau
            $rootScope.cartList.push($scope.currentArticle);
        }
        console.log($rootScope.cartList)
    }
    $scope.gotoUrl = function (url) {
        $location.path(url);
    };
    
});