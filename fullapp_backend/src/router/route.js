require("../module/module");
const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");

route.post("/users", controller.create);
route.get("/userss", controller.findAll);
route.get("/usersupdatea/:id", controller.findbyid);
route.put("/updateuser/:id", controller.replacement);
// route.get('chengpass/:id', controller.replacement);
route.delete("/usersdelete/:id", controller.remove);
route.put('/users/:id', controller.update);
route.delete("/removeUser/:id", controller.remove);

module.exports = route;