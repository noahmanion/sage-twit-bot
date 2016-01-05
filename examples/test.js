//
//
//sgl-twit-bot based on RTD2
//hack that growth
//
//
var Bot = require('./bot')
  , config1 = require('../config1');

var bot = new Bot(config1);

console.log('test script for sgl-twit-bot. Running...')

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
    var datenow = new Date(Date.now() - 10*60*60*1000);
    console.log('\n# followers:' + reply.ids.length.toString());
    console.log('\n The date/time is: ' + datenow);
  });
	var rand = Math.random();
	//console.log(rand);
	if(rand <= 1){//put your function to test between here
		 /****
     var params = { 
       q: "\#chicagobiennial"
      , since: datestring()
      , result_type: "mixed" 
    };
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" +name);
    });
    *****/ 

    console.log("function operates now")
    };
    
    // and here
}, 10000);

function handleError(err) {
	console.error('response status code:', err.satusCode);
	console.error('message:', err.message);
};