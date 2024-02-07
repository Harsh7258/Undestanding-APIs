const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const articles = [];

app.get('/', (req, res) => {
    // console.log("GET route!!");

    res.status(200).json({
        status: 'success',
        message: 'World wide football news API.'
    })
});

app.get('/news', (req, res) => {
    axios.get('https://www.goal.com/en-in/news').then((response) => {
        const html = response.data;
        // console.log(JSON.stringify(html));
        const $ = cheerio.load(html);

        $('a:contains("Cristiano Ronaldo")', html).each(function() {
            const title = $(this).text();
            const url = $(this).attr('href');

            articles.push({
                title,
                url
            })
        })
        res.status(200).json({
            status: 'success',
            data: {
                articles
            }
        })
    }).catch((err) => console.log(err)); 
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is connected on port: ${PORT}`);
})