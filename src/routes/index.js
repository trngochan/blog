const newsRouter = require('./news');
const trangchuRouter = require('./trangchu');
const siterouter = require('./site');

function routes(app) {
    app.use('/news', newsRouter);

    app.use('/trangchu', trangchuRouter);

    app.use('/', siterouter);
}

module.exports = routes;
