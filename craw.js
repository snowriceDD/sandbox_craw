
const request = require('request');
const cheerio = require('cheerio');


scrapingResult = {
    'position': '',
    'company': '',
    'title': '',
    'experience': '',
    'href': '',
}

scrapingBody = {
    
}

const url = 'https://www.wanted.co.kr/wdlist/518/669?country=kr&job_sort=company.response_rate_order&years=0&years=1&locations=all';

function getData() {
    request({
        url : url,
        headers : {'user-Agent' : 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36'},
    }, (err, res, body) => {
        const $ = cheerio.load(body);

        scrapingBody = $('ul').html();
        console.log(body);

    })
    

    }


getData();