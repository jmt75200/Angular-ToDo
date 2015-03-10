angular
  .module('TodoApp')
  //dependency injection -----v---------------v
  .service('TodoService', ['$http', function($http){

    this.list = function () {
      //returns a promise
      return $http.get('/api');
    };

  }]);