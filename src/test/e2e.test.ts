import puppeteer from 'puppeteer';

describe('e2e tests', () => {
  let page: puppeteer.Page;
  let browser: puppeteer.Browser;

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    page = await browser.newPage();
    await page.goto('https://muslim86.github.io/catalog/');
  });

  it('should catalog page', async () => {
    await sleep(3000);
    await page.screenshot({ path: './src/test/screen/catalog.png' });
  });

  it('should view list', async () => {
    await page.click('.ViewModelsPanel_component__3c1BD > button:nth-child(2) ');
    await page.click('.CatalogItem_component__KUmLS:nth-child(1) ');
    await page.screenshot({ path: './src/test/screen/list.png' });
  });

  it('should be hidden', async () => {
    await page.click('.App_content__2kCVU > div > button ');
    await page.screenshot({ path: './src/test/screen/hidden.png' });
  });

  it('should be filter', async () => {
    await page.click('.App_content__2kCVU > div > button ');
    await page.click('.SearchLine_component__3PyAa > textarea');
    await page.keyboard.type('bee');
    await page.screenshot({ path: './src/test/screen/filter.png' });
  });
});
