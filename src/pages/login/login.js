
app.controller('loginController',['$scope','$http','$location','$state','apiSevrices', function ($scope,$http,$location,$state,apiSevrices){
    "use strict";
	if(localStorage.getItem('token')){
		$state.go('home');
	}

	$scope.user ={};

  $scope.errorPoup =false;
  $scope.errmsg ='';

	$scope.login = function(){
		console.log("login ........",$scope.user);
		// $http.post(urlPath+'loginapi',$scope.user,{headers:{'Content-Type': 'application/json'}}).success(function (response) { 
        //   if(response.code==200) {}
        // });
    var path ='/loginapi';
  	apiSevrices.login(path,$scope.user).then(function(response){
  		if(response.code==200) {
  			localStorage.setItem('token',response.token);
  			$state.go('home');
  		}else{
        console.log("errorr");
        $scope.errorPoup =true;
        $scope.errmsg ="Username or password not match";
      }
  	});
	}

  $scope.errorbox = function(){
     $scope.errorPoup =false;
  }
 
}]);
