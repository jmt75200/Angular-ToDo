angular
  /**
  * TodoApp Modul
  econtroler('todoCtrl', ['$scope', function($scope){
  
  }]    $scope.name = "Is Hooked Up";)
  *;
  * Description
  */
  // dependencies----v
  .module('TodoApp', [])

  // dependencies injection ------v------------------v
  .controller('TodoController', ['$scope', function($scope){

    $scope.todos = [];

    $scope.save_todo = function( new_title ){
      $scope.todos.push({
        title : new_title,
        completed : false
      });
    //clearing new input
    $scope.new_todo = "";
    };


  
  }]);