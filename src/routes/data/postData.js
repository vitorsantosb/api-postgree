const database = require('../infra/database.js');


exports.getPosts = function() {
    return postsData.getPosts();
}