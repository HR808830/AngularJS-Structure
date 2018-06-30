app.controller('resourceController',['$scope', '$http', '$location','apiSevrices', function ($scope, $http, $location,apiSevrices){
    console.log("resourceController page call ...........");

    $scope.messagePoup =false;
  	$scope.message ='';
  	$scope.resource={};
    $scope.addtopic  = function (){
    	var path ='/addresource';
	  	apiSevrices.addResource(path,$scope.resource).then(function(response){
	  		if(response.code==200) {
	  			$scope.messagePoup =true;
	        	$scope.message ="Resource added Successfully";
	  		}else{
	        console.log("errorr");
	        $scope.messagePoup =true;
	        $scope.message ="Resource not added";
	      }
	  	});
    }

    $scope.closePoup = function(){
	    $scope.messagePoup =false;
	}	
	
}]);



