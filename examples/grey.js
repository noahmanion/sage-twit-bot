//
//
//sgl-twit-bot based on RTD2
//hack that growth
//
//
var Bot = require('./bot')
  , config1 = require('../config1');

var bot = new Bot(config1);

console.log('sgl-twit-bot is Running. The greyest of hats...')

//get date string for today's date 
function datestring () {
	var d = new Date(Date.now() - 10*60*60*1000); // est timezone
	return d.getUTCFullYear() + '-'
	 +  (d.getUTCMonth() + 1) + '-'
	 +  d.getDate();
};
function getRandomArbitrary(min, max) {
	return Math.random(max - min) + min;

};

setInterval(function() {
  bot.twit.get('followers/ids', function(err, reply) {
    if(err) return handleError(err)
    console.log('\n# followers:' + reply.ids.length.toString());
  });
	var rand = Math.random();
	//console.log(rand);
	if(rand <= .05){//follow a follower of @dwell
		 var params = {
      screen_name: "dwell"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
	} else if (rand <= .10) {// follow a follower of @DWR_Tweets
		var params = {
			screen_name: "DWR_tweets"
		};
		bot.mingleUser(params, function(err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name + ", follower of @" + params.screen_name);
		});
	} else if (rand <= .15) {// follow a follower of @houzz
		var params = {
			screen_name: "houzz"
		};
		bot.mingleUser(params, function(err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name + ", follower of @" + params.screen_name);
		});
	} else if (rand <= .20) {// follow a follower of @DEDON
		var params = {
			screen_name: "DEDON"
		};
		bot.mingleUser(params, function(err, reply) {
			if(err) return handleError(err)

			var name = reply.screen_name;
			console.log("\nMingle: Followerd @" + name + ", follower of @" + params.screen_name);
		});
	} else if (rand <= .25) {// follow a follower of @RealSimple
		var params = {
			screen_name: "RealSimple"
		};
		bot.mingleUser(params, function(err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name + ", follower of @" + params.screen_name);
		});
	} else if (rand <= .30) {// follow a follower of @AptTherapy
		var params = {
			screen_name: "AptTherapy"
		};
		bot.mingleUser(params, function(err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name + ", follower of @" + params.screen_name);
		});

	} else if (rand <= .35) {// follow a follower of @inhabitat
		var params = {
			screen_name: "inhabitat"
		};
		bot.mingleUser(params, function(err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name + ", follower of @" + params.screen_name);
		});
	} else if (rand <= .40) {// follow a follower of @freshome
		var params = {
			screen_name: "freshome"
		};
		bot.mingleUser(params, function(err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name + ", follower of @" + params.screen_name);
		});
	} else if (rand <= .45) {// follow a follower of @designmilk
		var params = {
			screen_name: "designmilk"
		};
		bot.mingleUser(params, function(err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name + ", follower of @" + params.screen_name);
		});

	} else if (rand <= .50) {// follow a follower of @Food52
		var params = {
			screen_name: "Food52"
		};
		bot.mingleUser(params, function(err, reply) {
			if(err) return handleError(err);

			var name = reply.screen_name;
			console.log("\nMingle: Followed @" + name + ", follower of @" + params.screen_name);
		});

	} else if (rand <= .95) {//prune followers
		bot.prune(function(err, reply) {
			if (err) return handleError(err);

			var name = reply.screen_name
			console.log('\nPrune: unfollowed @' + name);
		});

	} else {//prune those scrubs (see what i did there?)
		bot.prune(function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name
      console.log('\nPrune: unfollowed @'+ name);
    });
	}
}, getRandomArbitrary(90000,180000));

function handleError(err) {
	console.error('response status code:', err.satusCode);
	console.error('message:', err.message);
};