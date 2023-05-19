class NewsController {
    //[get] /news
    index(req, res) {
        res.render('news');
    }

    //GET /news/:slug
    show(req, res) {
        res.send('NEWS_DETAIL');
    }
}

module.exports = new NewsController();

// const newsController = require('./NewsController')
//cach import controller new
