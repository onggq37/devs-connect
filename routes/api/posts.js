const express = require("express");
const router = express.Router();

//GET api/post
//access: public
router.get("/", (req, res) => {
  res.send("post Route");
});

module.exports = router;
