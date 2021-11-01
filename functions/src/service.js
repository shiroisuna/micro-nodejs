
const cheerio = require('cheerio');
let request = require('request-promise');
const puppeteer = require('puppeteer');
const cookiesJar = request.jar();
request = request.defaults({ jar: cookiesJar });

const getUrl = async (lot) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	const data = await page.goto(`https://www.autobidmaster.com/en/carfinder-online-auto-auctions/lot/${lot}`);
	await browser.close();
	return data._url
}

const getBody = async (lot) => {
	const url = await getUrl(lot);
	const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(url);
		
		var html = await page.content()
		let $ = cheerio.load(html);
		const body = $('#lot-view-page');
		const childrenBody = $(body.children()[0]).children();
		const divContentFull = childrenBody.toArray().filter((element) => $(element).attr().class === '');
		const divContent = $($(divContentFull).children()[0]).children()[1];
		const divRealContent = $($($(divContent).children()[1]).children()[0]).children()[1];
		
		const vinDataHtml = $($($(divRealContent).children()[0]).children()[1]).children()[0];
		const additionalDataHtml = $($($(divRealContent).children()[0]).children()[2]).children()[0];
		const vinData = [];
		
		$(vinDataHtml).each((index, data) => {
			vinData.push($(data).text());
		});

		$(additionalDataHtml).children().each((index, data) => {
			vinData.push($(data).text());
		});
		const realData = vinData.map(i => {
			const [key, value] = i.split(':');
			return {key, value}
		});
		
	await browser.close();
	return realData;
};

module.exports = {getBody};