/**
 * programmers 신입 프론트엔드 공고 크롤러
 */

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async () => {

const url = 'https://career.programmers.co.kr/job?page=1&min_career=0&order=recent&job_category_ids=4';

  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1300,
    height: 100000
  })
  await page.goto(url);

  const content = await page.content();
  const $ = cheerio.load(content);
  const lists = $('#list-positions-wrapper > ul > li');
  lists.each((i, l) => {
    const name = $(l).find('div.item-body > h6 > a').text();
    const hrefLink = $(l).find('div.item-body > div.position-title-wrapper > h5 > a').attr().href;
    console.log(i, name, hrefLink);
  })
  browser.close();
})();