const binance = require('node-binance-api');
binance.options({
	'APIKEY':'{process.env.B_KEY}',
	'APISECRET':'{process.env.B_SECRET}'
});


binance.prices(function(ticker) {
	console.log("prices()", ticker);
	console.log("Price of BNB: ", ticker.BNBBTC);
});
