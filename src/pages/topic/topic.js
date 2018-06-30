app.controller('topicController',['$scope', '$http', '$location','apiSevrices', function ($scope, $http, $location,apiSevrices){
    console.log("topicController page call ...........");

    $scope.messagePoup =false;
  	$scope.message ='';
  	$scope.topic={};
    $scope.addtopic = function(){
    	var path ='/addtopic';
	  	apiSevrices.addTopic(path,$scope.topic).then(function(response){
	  		if(response.code==200) {
	  			$scope.messagePoup =true;
	        	$scope.message ="Topic added Successfully";
	  		}else{
	        console.log("errorr");
	        $scope.messagePoup =true;
	        $scope.message ="This topic not added";
	      }
	  	});
    }

    $scope.closePoup = function(){
     $scope.messagePoup =false;
    }
	    
	
}]);



