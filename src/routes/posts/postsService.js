const { execute } = require("../../database/databaseService");
const express = require("express");
const router = express.Router;

async function init() {
  await execute(
    "CREATE TABLE IF NOT EXISTS posts (id serial PRIMARY KEY, title varchar(255), content text);"
  );

  const PostsController = require("./postsController");
  router.use(PostsController.router);
}

async function createInitialValues() {
  await execute(
    "INSERT INTO posts (title, content) VALUES ('Primeiro Post', 'Este é o primeiro post');"
  );
  await execute(
    "INSERT INTO posts (title, content) VALUES ('Segundo Post', 'Este é o segundo post');"
  );
}

async function getPosts() {
  const result = await execute("SELECT * FROM posts");
  return result.rows;
}

async function getPostById(postId) {
  const result = await execute("SELECT * FROM posts WHERE id = $1;", [postId]);
  return result.rows[0];
}

async function createPost(title, content) {
  const postIdResponse = await execute(
    "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING id;",
    [title, content]
  );

  const postId = postIdResponse[0].id;

  return await getPostById(postId);
}

module.exports = {
  init,
  createInitialValues,
  router,
  getPosts,
  getPostById,
  createPost,
};
