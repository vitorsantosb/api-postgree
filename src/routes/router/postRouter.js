const express = require('express');
const router = express.Router();
const postService = require('../service/postsService.js');

router.get('/posts', async function(req, res) {
    const posts = await postService.getPosts();
    res.json(posts);
})
router.get('posts/', async function(res, rej) {
    res.json({
        id: 1,
        title: 'API POSTSQL',
        content: '....',
        date: new Date(),
    });
});
router.get('/posts/:id');
router.post('/posts');
router.put('/posts/:id');
router.delete('/posts/:id');


module.exports = router