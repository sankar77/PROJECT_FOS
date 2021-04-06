import puppeteer from 'puppeteer';
const appUrlBase = 'http://localhost:3000';

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch({})
  page = await browser.newPage()
})

  describe('User sees information for a movie', () => {
    test('Clicking on More Details provides more details', async () => {
        await page.goto(`${appUrlBase}/`)
        const input = await page.waitForSelector('input')
        await page.type('input', 'shrek')
        await page.waitForSelector('button[type="submit"]');
        await page.click('#searchClick');
        await page.waitForSelector('.card-body');
        await page.waitForSelector('button[type="button"]');
        await page.click('#moreDetails');
        await page.waitForSelector('#popover-basic .popover-body')
        await page.screenshot({path: 'example1.png'});
        const result = await page.evaluate(() => {
          return [...document.querySelectorAll('p')].map(el => el.textContent);
        })
        expect(result.length).toBeGreaterThanOrEqual(1);
    }, 20000)

    test('Clicking on cast details provides casting info', async () => {      
      await page.waitForSelector('#castDetails');
      await page.click('#castDetails');
      await page.screenshot({path: 'example2.png'});
      await page.waitForSelector('#popover-basic-cast .popover-body ul')
      await page.screenshot({path: 'example1.png'});
      const result = await page.evaluate(() => {
        return [...document.querySelectorAll('li.list-group-item')].map(el => el.textContent);
      })
      expect(result[0]).toEqual("Mike Myers");
      expect(result.length).toBeGreaterThanOrEqual(1);
  }, 20000)
  })
  
  afterAll(() => {
    browser.close()
  })
  