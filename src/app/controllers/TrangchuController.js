class TrangchuController {
    index(req, res) {
        res.render('home');
    }
}

module.exports = new TrangchuController();
