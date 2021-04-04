import puppeteer from 'puppeteer';
const appUrlBase = 'http://localhost:3000';

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch({})
  page = await browser.newPage()
})

describe('User should see nav bar', () => {
  test('Heading', async () => {
    jest.setTimeout(10)
    await page.goto(`${appUrlBase}/`)
    await page.waitForSelector('a')
    const result = await page.evaluate(() => {
      return document.querySelector('a').innerText
    })
    expect(result).toEqual('Home')

    })

    test('All navbar tabs show up', async () => {
      await page.goto(`${appUrlBase}/`)
      await page.waitForSelector('.container')
      const books = await page.evaluate(() => {
        return [...document.querySelectorAll('.nav-item .nav-link')].map(el => el.innerText)
      })
  
      expect(books.length).toEqual(4)
  })

})

afterAll(() => {
  browser.close()
})
