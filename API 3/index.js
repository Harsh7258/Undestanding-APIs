const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const newspapers = [
    {
        name: 'guardian',
        url: 'https://www.theguardian.com/technology/cryptocurrencies'
    },
    {
        name: 'crpyto',
        url: 'https://crypto.news/'
    },
    {
        name: 'Times-of-India',
        url: 'https://timesofindia.indiatimes.com/business/cryptocurrency'    
    },
    {
        name: 'economics-times',
        url: 'https://economictimes.indiatimes.com/topic/indian-cryptocurrency'
    }
];

const articles = [];

newspapers.forEach((newspaper) => {
    axios.get(newspaper.url).then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);

        $('a:contains("Bitcoin")', html).each(function() {
            const title = $(this).text();
            const url = $(this).attr('href');

            articles.push({
                title,
                url,
                source: newspaper.name
            })
        })
    })
})

app.get('/', (req, res) => {
    // console.log("GET route!!");

    res.status(200).json({
        status: 'success',
        message: 'Bitcoin news across different news websites.\n Please use this exact names for rotuing:-\n 1. guardian\n 2. crpyto\n 3. Times-of-India\n 4. economics-times'
    })
});

app.get('/news', (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            data: {
                articles
            }
        })
    } catch (error) {
        console.log(error);
    }
});

app.get('/news/:newspaperId', async (req, res) => {
    // console.log(req.params.newspaperId);
    const newspaperIdName = req.params.newspaperId;
    // console.log(newspaperName);

    const newspaperURL = newspapers.filter((news) => news.name == newspaperIdName)[0].url
    // console.log(newspaperURL);

    axios.get(newspaperURL).then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        const specifiedArticles = [];

        $('a:contains("Bitcoin")', html).each(function() {
            const title = $(this).text();
            const url = $(this).attr('href');

            specifiedArticles.push({
                title,
                url,
                source: newspaperIdName
            })
        })
        res.status(200).json({
            status: 'success',
            data: {
                specifiedArticles
            }
        })
    }).catch((err) => console.log(err))
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is connected on port: ${PORT}`);
})