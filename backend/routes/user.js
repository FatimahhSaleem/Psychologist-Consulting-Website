const express = require("express");
const router = express.Router();
// const {
//   getAllTasks,
//   createTask,
//   getTaskById,
//   updateTask,
//   deleteTask,
// } = require("../controllers/tasks");

router.get("/get", getAllTasks);
router.get("/get/:taskId", getTaskById);
router.post("/createTask", createTask);
router.put("/updateTask/:taskId", updateTask);
router.delete("/deleteTask/:taskId", deleteTask);

module.exports = router;
