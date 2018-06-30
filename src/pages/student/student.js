app.controller('studentController',['$scope', '$http', '$location','apiSevrices', function ($scope, $http, $location,apiSevrices){
    console.log("studentController page call ...........");

    $scope.messagePoup =false;
  	$scope.message ='';
  	$scope.studentlist=[];

  	var path ='/getstudentlist';
  	apiSevrices.getallStudent(path).then(function(response){
  		if(response.code==200) {
  			$scope.studentlist = response.data;
  		}else{
        console.log("errorr");
        $scope.messagePoup =true;
        $scope.message ="Error:can't get student list";
      }
  	});
    	
  	$scope.closePoup = function(){
     $scope.messagePoup =false;
    }
}]);



