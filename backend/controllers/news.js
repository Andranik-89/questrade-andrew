const News = require('../models/News');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('edff783f46964bf7b12b95d8b4e7f82e');


const saveNews = async (req, res, next) => {
    try {
        const { title, content, urlToImage } = req.body
        const news = await News.create({ title, content, urlToImage });
        console.log('news: ', news);
        res.status(200).json(news)
    } catch (error) {
        next(error);
    }
}

const getNews = async (req, res, next) => {
    try {
        const news = await News.find().select('_id title').lean();
        return res.status(200).json(news);
    } catch (error) {
        next(error);
    }
}

const getNewsById = async (req, res, next) => {
    console.log('tuta', req.params);
    try {
        const { _id } = req.params;
        const news = await News.findOne({ _id }).lean();
        return res.status(200).json(news);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    saveNews,
    getNews,
    getNewsById
}