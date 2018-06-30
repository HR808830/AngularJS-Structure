app.directive('appHeader',function(){
	return {
  		templateUrl:'header.html',
	}
});
app.controller('headerController',['$scope','$location','$http',function ($scope,$location,$http){
	console.log("header pages call........");
    $scope.logout = function() {
        localStorage.clear();
        $location.path('/login');
    }

    $scope.myprofile = function() {
        alert("my profile call");
    }
}]);

