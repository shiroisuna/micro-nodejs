const scraperObject = {
    url: 'https://www.copart.com/lot/47104521',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);

        //  // Wait for the required DOM to be rendered
        await page.waitForSelector('.clearfix');
        // // Get the link to all the required books
        let urls = await page.$$eval('span', links => {

        //     // Make sure the book to be scraped is in stock
        //     // links = links.filter(link => link.querySelector('.one-click-select > span').textContent !== "In stock")
        //     // Extract the links from the data
        //     // links = links.map(el => el.querySelector('span > span').textContent)
        //     return links;
        console.log("links.textContent");
        });

    }
}

module.exports = scraperObject;