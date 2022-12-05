const express = require('express');
const axios = require('axios');

const router = express.Router();

// @desc INDEX PAGE
// @route GET /
router.get('/', async (req, res) => {

    try {
        fetch(`https://www.raddy.dev/wp-json/wp/v2/posts`)
            .then(response => response.json())
            .then(data => {
                res.render('news', {
                    title: 'News-o-clock',
                    articles: data
                });
            })
            .catch(err => console.error(err))
        ;


    } catch (error) {
        if(error.response) {
            console.log(error.response);
        }
        else if (error.request) {
            console.log(error.request);
        }
        else {
            console.log(error.message);
        }
    }
})

// @desc SINGLE NEWS PAGE
// @route GET /news/id
router.get('/news/:id', async (req, res) => {
    let newsId = req.params.id;
    try {
        fetch(`https://www.raddy.dev/wp-json/wp/v2/posts/${newsId}`)
            .then(response => response.json())
            .then(data => {
                res.render('newsSingle', {
                    title: 'Keep Reading',
                    article: data
                });
            })
            .catch(err => console.error(err))
        ;
    } catch (error) {
        console.error(error);
    }
})
// @desc Search PAGE
// @route POST /news/id
router.post('/', async (req, res) => {
    let search = req.body.search;
    try {
        fetch(`https://www.raddy.dev/wp-json/wp/v2/posts?search=${search}`)
            .then(response => response.json())
            .then(data => {
                res.render('newsSearch', {
                    title: 'Searched',
                    articles: data
                });
            })
            .catch(err => console.error(err))
        ;
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;