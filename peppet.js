const puppeteer = require('puppeteer');

const url = 'https://www.wanted.co.kr/wdlist/518/669?country=kr&job_sort=company.response_rate_order&years=0&years=1&locations=all';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  // 웹 사이트의 데이터를 크롤링합니다.
  await browser.close();
})();
