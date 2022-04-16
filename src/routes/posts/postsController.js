const express = require("express");
const router = express.Router();
const PostsService = require("./postsService");

router.get("/posts", async (request, response, next) => {
  const posts = await PostsService.getPosts();

  response.json(posts);
});

router.get("/posts/:postId", async (request, response, next) => {
  const postId = request.params.postId;

  if (!postId) {
    response.status(400).json({
      error: "Post ID is required",
    });
    return;
  }

  const post = await PostsService.getPostById(postId);

  if (!post) {
    response.status(404).json({
      error: "Post not found",
    });
    return;
  }

  response.json(post);
});

module.exports = { router };
