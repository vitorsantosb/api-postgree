const postsData = require('../data/postData.js');

exports.getPosts = function() {
    return postsData.getPosts();
}