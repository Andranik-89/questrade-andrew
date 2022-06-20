const { saveNews, getNews, getNewsById } = require('../controllers/News');

const News = (router) => {
    router.route('/news').post(saveNews);
    router.route('/news').get(getNews);
    router.route('/news/:_id').get(getNewsById);
}

module.exports = News;