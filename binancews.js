const binance = require('node-binance-api');
binance.options({
	'APIKEY':'{process.env.B_KEY}',
	'APISECRET':'{process.env.B_SECRET}'
});

binance.websockets.trades(['BNBBTC', 'ETHBTC'], function(trades) {
	let {e:eventType, E:eventTime, s:symbol, p:price, q:quantity, m:maker, a:tradeId} = trades;
	console.log(symbol+" trade update. price: "+price+", quantity: "+quantity+", maker: "+maker);
});
