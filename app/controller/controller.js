const db = require("../model");
const Todo = db.todo_list;

// Create and Save a new Todo
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Todo
  const todo = new Todo({
    name: req.body.name,
    isDone: req.body.isDone ? req.body.isDone : false
  });

  // get id
  var id = todo.id;

  // Save Todo in the database
  todo
    .save(todo)
    .then(data => {
      //res.send(id);
      res.json({
          id: id
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Todo."
      });
    });
};

// Retrieve all Todos from the database.
exports.findAll = (req, res) => {
    Todo.find()
    .then(data => {
      //res.send(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving todos."
      });
    });
};

// Delete a Todo with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Todo.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Todo with id=${id}. Maybe Todo was not found!`
          });
        } else {
          res.send({
            message: "Todo was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Todo with id=" + id
        });
      });
};

// Mark a Todo as done
exports.makeDone = (req, res) => {
      const id = req.params.id;
      Todo.findByIdAndUpdate(id, {$set:{isDone:true}}, { useFindAndModify: false, new: true })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Todo with id=${id}. Maybe Todo was not found!`
            });
          } else res.send({ message: "Todo was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Todo with id=" + id
          });
        });
}

// Find a single Todo with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id);
    var existedObj;

    Todo.findById(id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found Todo with id " + id });
    else {
        existedObj = data;
        existedObj.isDone = true;
        res.send(existedObj);
    }
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving Todo with id=" + id });
  });
};

// Update a Todo by the id in the request
exports.update = (req, res) => {
  
};

// Delete all Todos from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Todos
exports.findAllDone = (req, res) => {
  
};