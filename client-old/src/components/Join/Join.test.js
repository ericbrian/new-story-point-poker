const puppeteer = require('puppeteer');

test('should click around', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 40,
        args: ['--window-size:1920,1080']
    });

    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.click('input#joinName');
    await page.type('input#joinName', 'Eric');
    await page.click('input#joinRoom');
    await page.type('input#joinRoom', 'Eric\'s Test Room');
    await page.click('button#joinSubmit');
    const url = await page.evaluate('location.href');

    expect(url).toBe('http://localhost:3000/room/Eric\'s%20Test%20Room/?name=Eric');
    await browser.close();

}, 30000); // 5 seconds is the default but that isn't enough. Change to 30 seconds in ms.
