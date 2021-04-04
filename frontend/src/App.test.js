// // import { render, screen } from '@testing-library/react';
// import App from '../src/App';
// import nightmare from 'nightmare';

// describe('Public Pages', function() {
//   // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
//   this.timeout('30s')

//   let nightmare = null
//   beforeEach(() => {
//     nightmare = new Nightmare()
//   })

//   describe('/ (Home Page)', () => {
//     it('should load without error', done => {
//       // your actual testing urls will likely be `http://localhost:port/path`
//       nightmare.goto('https://localhost:3000/')
//         .end()
//         .then(function (result) { done() })
//         .catch(done)
//     })
//   })

//   describe('/auth (Login Page)', () => {
//     it('should load without error',  done => {
//       nightmare.goto('https://gethoodie.com/auth')
//         .end()
//         .then(result => { done() })
//         .catch(done)
//     })
//   })
// })

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });


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
