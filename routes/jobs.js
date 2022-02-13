var express = require('express');
var router = express.Router();
var jobs=require("../service/jobs.service")


/* GET users listing. */
router.post('/post',jobs.hostjobs );
router.get("/getusers/:userId",jobs.getusers);
router.get("/getposts",jobs.getposts);
router.delete("/:id",jobs.deletePost)



module.exports = router;
