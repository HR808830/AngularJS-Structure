app.controller('queAnswerController',['$scope', '$http', '$location','apiSevrices', function ($scope, $http, $location,apiSevrices){
    console.log("queAnswerController page call ...........");

    $scope.messagePoup =false;
  	$scope.message ='';
  	$scope.question={};
    $scope.addQueAnswer= function (){
    	var path ='/addtopic';
	  	apiSevrices.addQueAnswer(path,$scope.question).then(function(response){
	  		if(response.code==200) {
	  			$scope.messagePoup =true;
	        	$scope.message ="question added Successfully";
	  		}else{
	        console.log("errorr");
	        $scope.messagePoup =true;
	        $scope.message ="This question not added";
	      }
	  	});
    }

    $scope.closePoup = function(){
     $scope.messagePoup =false;
    }
	    
	
}]);



