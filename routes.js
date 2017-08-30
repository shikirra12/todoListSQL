const express = require('express');
const models = require('./models/index');

const router = express();

// const toDo = [];
// const complete = [];

// function genId() {
//   let id = 1;
//   let idFound = true;
//
// while (idFound) {
//   let task = toDo.find(function(task) {
//     return task.id == id;
//   });
//   if (task) {
//     id++;
//   } else {
//     idFound = false;
//   }
// }
// return id;
// }

router.get("/", function(req, res){
  models.todo.findAll()
  .then(function(data) {
    res.render('todo', {todos: data});
  });
});

router.post("/create", function(req, res){
  console.log("this is todo", req.body.addTask);
  models.todo.create({
    text: req.body.addTask,
    complete: false
  })
  .then(function(data) {
    res.redirect("/");
  })
});

router.post("/complete/:id", function(req, res) {
  // let task = toDo.find(function(task) {
  //   return req.params.id;
  // });
  // let index = toDo.indexOf(task);
  // complete.push(task);
  // toDo.splice(index, 1);
  models.todo.findById({
    id: req.body.id
  })
  .then(function(req, res) {
    res.redirect("/");
  });
  // res.redirect("/");
  });

router.post('/edit/:id', function(data) {
  models.todo.update({
    text: req.body.doTask
  }, { where: {
    id: req.params.id
  }
  })
  .then(function(data) {
    res.redirect('/');
  });
});
//
//   router.get('/delete/:id', function(req, res){
//     models.todo.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//     .then(function(data) {
//       res.redirect('/');
//     });
//   });


module.exports = router;
