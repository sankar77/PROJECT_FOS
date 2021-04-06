// import puppeteer from 'puppeteer';
// const appUrlBase = 'http://localhost:3000';

// let browser
// let page

// beforeAll(async () => {
//   browser = await puppeteer.launch({})
//   page = await browser.newPage()
//   jest.setTimeout(15000)
// })

// describe('User can see home screen buttons ', () => {
//   test('Get now playing', async () => {
//     jest.setTimeout(10)
//     await page.goto(`${appUrlBase}/`)
//     await page.waitForSelector('Button')
//     const result = await page.evaluate(() => {
//         return [...document.querySelectorAll('Button')].find(el => el.innerText === 'GET TV Shows Airing Today')
//     })
//     expect(result.length).toEqual(3)
//   })

// //   test('Genre selector', async () => {
// //     jest.setTimeout(15000)
// //     await page.goto(`${appUrlBase}/`)
// //     await page.waitForSelector('.InputLabel')
// //     const result = await page.evaluate(() => {
// //       return document.querySelector('.InputLabel').innerText
// //     })
// //     expect(result).toEqual('Genre')
// //   })



// //     test('All navbar tabs show up', async () => {
// //       await page.goto(`${appUrlBase}/`)
// //       await page.waitForSelector('.container')
// //       const books = await page.evaluate(() => {
// //         return [...document.querySelectorAll('.nav-item .nav-link')].map(el => el.innerText)
// //       })
  
// //       expect(books.length).toEqual(4)
// //   })

// })

// afterAll(() => {
//   browser.close()
// })
