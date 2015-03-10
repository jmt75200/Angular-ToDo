angular
  .module('TodoApp')
  //dependency injection -----v---------------v
  .service('TodoService', ['$http', function($http){

    this.list = function () {
      //returns a promise
      return $http.get('/api');
    };

    this.create = function ( todo ) {
      //returns a promise
      return $http.post('/api', todo);
    };

    this.complete = function ( todo_id ) {
      //returns a promise
      return $http.put('/api/'+todo_id+'/complete');
    };

    this.incomplete = function ( todo_id ) {
      //returns a promise
      return $http.put('/api/'+todo_id+'/incomplete');
    };

    this.delete = function ( todo_id ) {
      return $http.delete('/api/' + todo_id);
    };

  }]);