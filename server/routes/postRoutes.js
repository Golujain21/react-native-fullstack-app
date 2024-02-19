const express = require("express");
const { requireSingIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostsContoller,
  getUserPostsController,
} = require("../controllers/postController");

//router object
const router = express.Router();

// CREATE POST || POST
router.post("/create-post", requireSingIn, createPostController);

//GET ALL POSTs
router.get("/get-all-post", getAllPostsContoller);
//GET user POSTs
router.get("/get-user-post", requireSingIn, getUserPostsController);
//export
module.exports = router;
