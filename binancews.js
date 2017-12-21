const binance = require('node-binance-api');
binance.options({
	'APIKEY':'{process.env.B_KEY}',
	'APISECRET':'{process.env.B_SECRET}'
});

var graphite = require('graphite');
var client = graphite.createClient('plaintext://localhost:2003/');

binance.websockets.trades(['BNBBTC', 'ETHBTC'], function(trades) {
	let {e:eventType, E:eventTime, s:symbol, p:price, q:quantity, m:maker, a:tradeId} = trades;
	console.log(symbol+" trade update. price: "+price+", quantity: "+quantity+", maker: "+maker);
	var metrics = {"{symbol}.volumn": quantity, "{symbol}.price": price};
	client.write(metrics, function(err) {
		  // if err is null, your data was sent to graphite!
	});
});
