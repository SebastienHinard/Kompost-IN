//controller cartController
coinLectureApp.controller('cartController',function($scope,$rootScope,$window){
    $scope.addQuantity=function(x){
        $rootScope.articleCount +=1;
        $rootScope.cartList[x].quantite +=1;
    };
    $scope.removeQuantity=function(x){
        console.log($rootScope.cartList[x].quantite);
        if ($rootScope.cartList[x].quantite > 1 ){
            $rootScope.articleCount -=1;
            $rootScope.cartList[x].quantite -=1;
        }
        else{
            if ($window.confirm("Vous allez supprimer cet article de votre panier.\nEtes-vous sur de vouloir continuer?")){
                $rootScope.articleCount -=1;
                $rootScope.cartList.splice(x,1);
            }
        }
    };
    $scope.removeArticle=function(x){
        if ($window.confirm("Vous allez supprimer cet article de votre panier.\nEtes-vous sur de vouloir continuer?")){
            $rootScope.articleCount -= ($rootScope.cartList[x].quantite);
            $rootScope.cartList.splice(x,1);
        }
    };
    $scope.totalPrice=function(){
        var total=0;
        for (i=0; i<$rootScope.cartList.length;i++){
            total += ($rootScope.cartList[i].quantite) * ($rootScope.books[$rootScope.cartList[i].id].Prix);
        }
        return total.toFixed(2);
    }
});
