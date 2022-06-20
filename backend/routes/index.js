const news = require('./news');

const getRoutes = (router) => {
    news(router);

    return router;
}

module.exports = getRoutes;