const puppeteer = require('puppeteer');

const scrapeShopee = async () => {
  const browser = await puppeteer.launch(
    { headless: true },
    { devtools: true },
  );
  const page = await browser.newPage();
  await page.goto('https://shopee.co.id/');
  await page.waitForSelector('div.shopee-popup__close-btn');
  await page.click('div.shopee-popup__close-btn');

  await page.waitForSelector('div.shopee-header-section__header__title');

  const scrapedData = await page.evaluate(() => {
    debugger;
    const list = document.querySelector(
      'div.shopee-header-section__header__title',
    );

    return list.innerText;
  });

  console.log(scrapedData);

  await browser.close();
  return scrapedData;
};

module.exports = {
  scrapeShopee,
};
