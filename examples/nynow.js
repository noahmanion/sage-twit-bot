//
// NY Now Bot. Follows, Unfollows & Favorites Based on tweets to and about NY Now
//
var Bot = require('./bot')
	, config1 = require('../config1.js');

var bot = new Bot(config1);

console.log("Builing momentum about the upcomming NY Now visit....")
//get date string for today's date
function datestring () {
	var d = new Date(Date.now() - 10*60*60*60*1000); //est Timezone
	return d.getUTCFullYear() + '-' 
	+  (d.getUTCMonth() + 1)  + '-'
	+  d.getDate();
};

setInterval(function() {
	bot.twit.get('followers/ids', function(err, reply) {
		if(err) return handleError(err);
			console.log('\n# Followers: ' + reply.ids.length.toString())
	});
	var rand = Math.random();
	if(rand <= 0.125) {
		var params = {
			q: '%40nynow'
			, since: datestring()
			, result_type: "mixed"
		};
		bot.searchFollow(params, function(err, reply) {
			if(err) return handleError(err);

				var name = reply.screen_name
			console.log("\nSearchFollow: followed @" + name + " who tweeted at " + params.q);
		});
	} else if (rand <= 0.375) {
		var params = {
			q: '%23nynow'
			, since: datestring()
			, result_type: "mixed"
		};
		bot.searchFollow(params, function(err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name
			console.log("\nSearchFollow: followed @" + name + " who tweeted about " + params.q);
		});
		
	} else if (rand <= 0.62) {
		var params = {
			q: '%23nynow'
			, since: datestring()
			, result_type: "mixed"
		};
		bot.favorite(params, function(err, reply) {
			if(err) return handleError(err);
			var name = reply.screen_name
			var id = reply.id
			var tweet = reply.text
			console.log("\nFavorite: Favorited response: " + id + ": " + tweet + "by user @" + name);
		});

	} else {
		bot.prune(function(err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name
			console.log("\nPrune: unfollwoed @"+ name)
		});
	}
}, 100000);

function handleError(err){
	console.error("response status: ", err.statusCode);
	console.error("data: ", err.message);
	console.error("code: ", err.code);
};