module.exports = app => {
    const todo_list = require("../controller/controller.js");
  
    var router = require("express").Router();
  
    // Create a new Todo
    router.post("/create", todo_list.create);
  
    // Retrieve all Todos
    router.get("/list", todo_list.findAll);

    // Make a Todo as Done
    router.put("/done/:id", todo_list.makeDone);
  
    // Delete a Todo with id
    router.delete("/delete", todo_list.delete);
  
    app.use('/api/todo', router);
  };