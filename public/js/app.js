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
  .controller('TodoController', ['$scope', 'TodoService', function($scope, TodoService){

    TodoService.list().then(function (response) {
      $scope.todos = response.data; //promise
    });


    $scope.save_todo = function( new_title ){
      var new_todo = {

        title : new_title,
        completed : false
      };
      $scope.todos.push(new_todo);

      //clearing new input
      $scope.todo_title_input = "";

      //save to db
      TodoService.create({ title : new_title }).then(function (response) {
        new_todo._id = response.data._id;
      });
    };

    $scope.enter_saves = function( $event ){
      if( $event.keyCode == 13){
        //enter keycode for [enter key]
        $scope.save_todo( $scope.todo_title_input );
      }
    };

    $scope.check_changed = function ( $event, todo_id ) {

      if ($event.srcElement.checked){
        TodoService.complete(todo_id);
      }else{
        TodoService.incomplete(todo_id);
      }
    };

    //on button click -- delete
    $scope.delete = function ( todo ) {
      $scope.todos.splice( $scope.todos.indexOf(todo), 1);
      TodoService.delete( todo._id );
    };


  }]);