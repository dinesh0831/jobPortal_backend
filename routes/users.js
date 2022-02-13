var express = require('express');
var router = express.Router();
var user=require("../service/user.service")


/* GET users listing. */
router.post('/register',user.register );
router.post("/login",user.login)
router.post("/apply",user.apply);
router.get("/:userId",user.userDatail)
module.exports = router;
