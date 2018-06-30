var mainurl ="http://localhost:8000";

angular.module('app.services', []).service('apiSevrices', function($q, $http) {
  var content = {headers:{'Content-Type': 'application/json'}}; 
  if(localStorage.getItem('token')){
    content = {headers:{'Content-Type': 'application/json','token' : localStorage.getItem('token')}};
  }
  
  function login(url,data){
    return $http.post(mainurl+url,data,content).then(function (getResponse) {
        // console.log("Services: ",getResponse);
        var deferred = $q.defer();
        deferred.resolve(getResponse);
        // console.log('login data: ',resultData);
        return deferred.promise;
    });
  }

  function resetPassword(url,data){
    return $http.post(mainurl+url,data,content).then(function (getResponse) {
        // console.log("Services: ",getResponse);
        var deferred = $q.defer();
        deferred.resolve(getResponse);
        // console.log('login data: ',resultData);
        return deferred.promise;
    });
  }

  function myProfile(url){
      return $http.get(mainurl+url,content).then(function (getResponse) {
          // console.log("Services: ",getResponse);
          var deferred = $q.defer();
          deferred.resolve(getResponse);
          // console.log('get data: ',resultData);
          return deferred.promise;
      });
  }

  function addTopic(url,data){
    console.log("added topic : "+JSON.stringify(data));
    return $http.post(mainurl+url,data,content).then(function (getResponse) {
        var deferred = $q.defer();
        deferred.resolve(getResponse);
        // console.log('added topic response: ',resultData);
        return deferred.promise;
    });
  }
   
  function addResource(url,data){
    console.log("added addResource : "+JSON.stringify(data));
    return $http.post(mainurl+url,data,content).then(function (getResponse) {
        var deferred = $q.defer();
        deferred.resolve(getResponse);
        // console.log('added addResource response: ',resultData);
        return deferred.promise;
    });
  } 

  function getallStudent(url){
    return $http.get(mainurl+url,content).then(function (getResponse) {
        // console.log("Services: ",getResponse);
        var deferred = $q.defer();
        deferred.resolve(getResponse);
        // console.log('get data: ',resultData);
        return deferred.promise;
    });
  }

  function addQueAnswer(url,data){
    return $http.post(mainurl+url,data,content).then(function (getResponse) {
        var deferred = $q.defer();
        deferred.resolve(getResponse);
        // console.log('added addResource response: ',resultData);
        return deferred.promise;
    });
  }


  function handleError(response) {
      console.log(JSON.stringify(response));
      // The API response from the server should be returned in a
      // nomralized format. However, if the request was not handled by the
      // server (or what not handles properly - ex. server error), then we
      // may have to normalize it on our end, as best we can.
      if (!angular.isObject(response.data) ||
          !response.data.message
      ) {
          return ($q.reject("An unknown error occurred."));
      }
      // Otherwise, use expected error message.
      return ($q.reject(response.data.message));
  }

  // I transform the successful response, unwrapping the application data
  // from the API response payload.
  function handleSuccess(response) {
      //console.log(response);
      return (response.data);
  }

  return {
    login:login,
    resetPassword:resetPassword,
    myProfile: myProfile,
    addTopic:addTopic,
    addResource:addResource,
    getallStudent:getallStudent,
    addQueAnswer:addQueAnswer
  };
});