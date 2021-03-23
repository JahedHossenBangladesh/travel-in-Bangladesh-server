const express = require("express");
const router = express.Router();
const userFormController = require("../controller/userForm.controller");

router.post("/",userFormController.create);


module.exports = router;