const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  } = require("./controllers/Todo");
  
  console.log({
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  });
  
  const router = require("express").Router();
  
  router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
  });
  
  router.get("/todos", getTodos);
  router.post("/todos", createTodo);
  router.put("/todos/:todoID", updateTodo);
  router.delete("/todos/:todoID", deleteTodo);
  
  module.exports = router;
  