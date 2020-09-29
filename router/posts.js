const express = require("express");
const router = express.Router();
const Post = require("../models/post");

//gets all posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

//submit post
router.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//specific post
router.get("/:postId", async (req, res) => {
  const post = await Post.findById(req.params.postId);
  res.json(post);
});

//delete post
router.delete("/:postId", async (req, res) => {
  const removed = await Post.remove({ _id: req.params.postId });
  res.send(removed);
});

//update post
router.patch("/:postId", async (req, res) => {
  const updated = await Post.updateOne(
    { _id: req.params.postId },
    { $set: { title: req.body.title } }
  );
  res.json(updated);
});

module.exports = router;
