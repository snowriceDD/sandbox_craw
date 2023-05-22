/**
 * wanted 신입 프론트엔드 공고 크롤러
 */

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async () => {

const url = 'https://www.wanted.co.kr/wdlist/518/669?country=kr&job_sort=company.response_rate_order&years=0&years=1&locations=all';
// const selector = '#__next > div.JobList_cn__t_THp > div > div > div.List_List_container__JnQMS > ul > li:nth-child(n) > div > a';

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
  const lists = $('#__next > div.JobList_cn__t_THp > div > div > div.List_List_container__JnQMS > ul > li');
  lists.each((i, l) => {
    const name = $(l).find('div > a > div > div.job-card-company-name').text();
    const hrefLink = $(l).find('div > a').attr().href;
    console.log(i, name, hrefLink);
  })
  browser.close();
})();