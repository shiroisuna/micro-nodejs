const functions = require("firebase-functions");

const express = require('express');

const cors = require('cors');

const cheerio = require('cheerio');

const browserObject = require('./browser');

const scraperController = require('./pageController');

const fs = require('fs');

let request = require('request-promise');

const cookiesJar = request.jar();

request = request.defaults({ jar: cookiesJar });

const app = express();




app.post("/test", (req, resp) =>{

	

	request('https://articulo.mercadolibre.com.ve/MLV-560469763-laminas-galvanizadas-calibre-22-_JM#reco_item_pos=1&reco_backend=machinalis-homes&reco_backend_type=function&reco_client=home_navigation-recommendations&reco_id=017b7710-dbbc-4290-8061-cf29fd524c42&c_id=/home/navigation-recommendations/element&c_element_order=2&c_uid=189acfb8-fd46-4534-b6e6-de156a21378e', function (error, response, body) {
	  if (error) throw new Error(error);
	  let $ = cheerio.load(body);

	  const f_g2 = $('.ui-pdp-gallery');

	  const out = f_g2.find(".ui-pdp-gallery__figure").text();

	  console.log(out);
	});


	// request('https://www.copart.com/lot/47104521', (err, resp, body) => {
	// 	// if(!err && resp.statusCode == 200){
	// 		let $ = cheerio.load(body);

	// 		const f_g2 = $('.f-g2');
	// 		const out = f_g2.find("span").text();

	// 		return out;

	// 		// $('span.one-click-select', '#vinDiv').each(function(){
	// 		// 	var vin = $(this).attr('id');
	// 		// 	console.log(vin);

	// 		// });
	// 	// }


	// });
	// return resp.status(200).json({message: 'helloWorld'});

});

const runtimeOpts = {
		  timeoutSeconds: 3600,
		  memory: '1GB'
		}


exports.app = functions.runWith({ timeoutSeconds: 500,
      memory: "1GB",}).https.onRequest(app);


