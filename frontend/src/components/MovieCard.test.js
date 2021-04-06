import puppeteer from 'puppeteer';
const appUrlBase = 'http://localhost:3000';

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch({})
  page = await browser.newPage()
  // weird glitch
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
      await page.screenshot({path: 'example3.png'});
      const result = await page.evaluate(() => {
        return [...document.querySelectorAll('li.list-group-item')].map(el => el.textContent);
      })
      expect(result.length).toBeGreaterThanOrEqual(1);
    }, 20000)

    test('Clicking on crew details provides casting info', async () => {      
      await page.waitForSelector('#crewDetails');
      await page.click('#crewDetails');
      await page.screenshot({path: 'crew.png'});
      await page.waitForSelector('#popover-basic-crew .popover-body ul')
      await page.screenshot({path: 'crew2.png'});
      const result = await page.evaluate(() => {
        return [...document.querySelectorAll('li.list-group-item')].map(el => el.textContent);
      })
      expect(result.length).toBeGreaterThanOrEqual(1);
    }, 20000)

    test('Clicking on reviews provides review info', async () => {      
      await page.goto(`${appUrlBase}/`)
      const input = await page.waitForSelector('input')
      await page.type('input', 'avengers')
      await page.waitForSelector('button[type="submit"]');
      await page.click('#searchClick');
      await page.waitForSelector('.card-body');
      await page.waitForSelector('button[type="button"]');
      await page.click('#moreDetails');
      await page.waitForSelector('#reviews');
      await page.click('#reviews');
      await page.screenshot({path: 'reviews.png'});
      await page.waitForSelector('#popover-basic-reviews .popover-body ul')
      await page.screenshot({path: 'reviews2.png'});
      const result = await page.evaluate(() => {
        return [...document.querySelectorAll('li.list-group-item')].map(el => el.textContent);
      })
      expect(result.length).toBeGreaterThanOrEqual(1);
    }, 20000)

    test('Clicking on related provides additional videos', async () => {      
      await page.waitForSelector('#relatedVideos');
      await page.click('#relatedVideos');
      await page.screenshot({path: 'vids.png'});
      await page.waitForSelector('#popover-basic-videos .popover-body ul')
      await page.screenshot({path: 'vids2.png'});
      const result = await page.evaluate(() => {
        return [...document.querySelectorAll('li.list-group-item')].map(el => el.textContent);
      })
      expect(result.length).toBeGreaterThanOrEqual(1);
    }, 20000)
  })
  
  afterAll(() => {
    browser.close()
  })
  