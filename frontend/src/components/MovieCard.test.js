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
    const result = await page.evaluate(() => {
      return [...document.querySelectorAll('p')].map(el => el.textContent);
    })
    expect(result.length).toBeGreaterThanOrEqual(0);
  }, 20000)

  test('Clicking on cast details provides casting info', async () => {
    await page.waitForSelector('#castDetails');
    await page.click('#castDetails');
    await page.waitForSelector('#popover-basic-cast .popover-body ul')
    const result = await page.evaluate(() => {
      return [...document.querySelectorAll('li.list-group-item')].map(el => el.textContent);
    })
    expect(result.length).toBeGreaterThanOrEqual(0);
  }, 20000)

  test('Clicking on crew details provides casting info', async () => {
    await page.waitForSelector('#crewDetails');
    await page.click('#crewDetails');
    await page.waitForSelector('#popover-basic-crew .popover-body ul')
    const result = await page.evaluate(() => {
      return [...document.querySelectorAll('li.list-group-item')].map(el => el.textContent);
    })
    expect(result.length).toBeGreaterThanOrEqual(0);
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
    await page.waitForSelector('#popover-basic-reviews .popover-body ul')
    const result = await page.evaluate(() => {
      return [...document.querySelectorAll('li.list-group-item')].map(el => el.textContent);
    })
    expect(result.length).toBeGreaterThanOrEqual(0);
  }, 20000)

  test('Clicking on related provides additional videos', async () => {
    await page.goto(`${appUrlBase}/`)
    const input = await page.waitForSelector('input')
    await page.type('input', 'avengers')
    await page.waitForSelector('button[type="submit"]');
    await page.click('#searchClick');

    await page.waitForSelector('.card-body');
    await page.waitForSelector('button[type="button"]');
    await page.click('#moreDetails');
    await page.click('#relatedVideos');
    await page.waitForSelector('#popover-basic-videos .popover-body ul')

    const result = await page.evaluate(() => {
      return [...document.querySelectorAll('li.list-group-item')].map(el => el.textContent);
    })

    expect(result.length).toBeGreaterThanOrEqual(0);
  }, 20000)
})

afterAll(() => {
  browser.close()
})
  
