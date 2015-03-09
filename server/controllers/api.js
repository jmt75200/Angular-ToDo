var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');


router.get('/', function (req, res){
  Todo.find( function (err, todos) {
    if(err) throw err;
    res.json(todos);
  });
});

//add todo
router.post('/', function (req, res) {
  Todo.create({title : req.body.title}, function (err, todo) {
    if(err) throw err;
    res.json( todo );
  });
});
//delete todo
router.delete('/:id', function (req, res) {
  Todo.remove({ _id : req.params.id }, function (err, todo) {
    if(err) throw err;
    //this is the todo that was removed
    res.json( todo ); 
  });
});

//complete todo
router.put('/:id/complete', function (req, res) {
  Todo.update({ _id: req.params.id}, 
    { 
      $set : { 
        completed : true
      }
    }, function (err, todo) {
      if(err) throw err;
      //this is the todo that was updated
      res.json( todo ); 
    });
});

//uncomplete todo
router.put('/:id/incomplete', function (req, res) {
  Todo.update({ _id: req.params.id}, 
    { 
      $set : { 
        completed : false
      }
    }, function (err, todo) {
      if(err) throw err;
      //this is the todo that was updated
      res.json( todo ); 
    });
});

module.exports = router;