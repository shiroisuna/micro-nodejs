const functions = require("firebase-functions");

const express = require('express');

// const cors = require('cors');

// const cheerio = require('cheerio');

const browserObject = require('./browser');

const scraperController = require('./pageController');

const fs = require('fs');

const request = require('request');

const app = express();



//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance);






// app.get("/test", (req, resp) =>{

// 	request('https://www.copart.com/lot/47104521', (err, resp, body) => {
// 		if(!err && resp.statusCode == 200){
// 			let $ = cheerio.load(body);

// 			$('span.one-click-select', '#vinDiv').each(function(){
// 				var vin = $(this).attr('id');
// 				console.log(vin);

// 			});
// 		}
// 	});
// 	// return resp.status(200).json({message: 'helloWorld'});

// });



// exports.app = functions.https.onRequest(app);


