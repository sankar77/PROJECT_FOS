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

    test('Search', async () => {
        jest.setTimeout(10)
        await page.goto(`${appUrlBase}/`)
        await page.waitForSelector('Button')
        const result = await page.evaluate(() => {
            return document.querySelector('Button').innerText
        })

        expect(result).toEqual('Search')
    })

    test('Search bar', async () => {
        jest.setTimeout(15000)
        await page.goto(`${appUrlBase}/`)
        await page.waitForSelector('input')
        const result = await page.evaluate(() => {
            return document.querySelector('input').placeholder
        })

        expect(result).toEqual('Search Movies/TV Shows')
    })
})

describe('User should be able to search for a movie or TV show', () => {
    test('Search functionality should return a movie', async () => {
        await page.goto(`${appUrlBase}/`)

        const input = await page.waitForSelector('input')
        await page.type('input', 'shrek')
        await page.waitForSelector('button[type="submit"]');
        await page.click('#searchClick');
        await page.waitForSelector('.card-body');

        const result = await page.evaluate(() => {
            return document.querySelector('.card-title').innerText
        })

        await page.screenshot({path: 'example.png'});
        expect(result.length).toBeGreaterThanOrEqual(1);
    }, 10000)
})

afterAll(() => {
    browser.close()
})
