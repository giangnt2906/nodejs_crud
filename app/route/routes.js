module.exports = app => {
    const todo_list = require("../controller/controller.js");
  
    var router = require("express").Router();
  
    // Create a new Todo
    router.post("/create", todo_list.create);
  
    // Retrieve all Todos
    router.get("/list", todo_list.findAll);

    // Make a Todo as Done
    router.put("/done/:id", todo_list.makeDone);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Todo with id
    router.get("/detail/:id", todo_list.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // Delete a Todo with id
    router.delete("/delete/:id", todo_list.delete);
  
    // Delete all Todos
    //router.delete("/", tutorials.deleteAll);
  
    app.use('/api/todo', router);
  };