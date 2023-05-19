class SiteController {
    //[get] /
    home(req, res) {
        res.render('home');
    }

    //GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

// const newsController = require('./NewsController')
//cach import controller new
