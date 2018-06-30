
app.controller('resetPwdController',['$scope', '$http', '$location','apiSevrices', function ($scope, $http, $location,apiSevrices){
    "use strict";

    $scope.errorPoup =false;
  	$scope.errmsg ='';
	$scope.email='';
	
	$scope.resetPwd = function(){
		console.log("email ........",$scope.email);
   
		var path ='/resetpassword';
      	apiSevrices.resetPassword(path,$scope.user).then(function(response){
      		if(response.code==200) {

      		}else{
      			$scope.errorPoup =true;
        		$scope.errmsg ="EmailId don't match";
      		}
      	});
	}

	$scope.errorbox = function(){
     $scope.errorPoup =false;
  	}
}]);
