//
//  RTD3 - Twitter bot follows followers of profiles
//  It also prunes it's followings of friends that don't follow back.
//
var Bot = require('./bot')
  , config1 = require('../config1.js');

var bot = new Bot(config1);

console.log('RTD3: Running.');

//get date string for today's date (e.g. '2011-01-01')
function datestring () {
  var d = new Date(Date.now() - 10*60*60*1000);  //est timezone
  return d.getUTCFullYear()   + '-'
     +  (d.getUTCMonth() + 1) + '-'
     +   d.getDate();
};

setInterval(function() {
  bot.twit.get('followers/ids', function(err, reply) {
    if(err) return handleError(err)
    console.log('\n# followers:' + reply.ids.length.toString());
	//console.log(Date.now() - 10*60*60*1000);
  });
  var rand = Math.random(0,2);

  if(rand <= 0.1) { // follow a follower of @dwell
    var params = {
      screen_name: "dwell"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
  } else if(rand <= 0.2) { // follow a follower of @houzz
      var params = {
      screen_name: "houzz"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
  } else if (rand <= 0.3) { // follow a follower of @RealSimple
    var params = {
      screen_name: "RealSimple"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
  } else if (rand <= 0.4) { // follow a follower of @DEDON
    var params = {
      screen_name: "DEDON"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
  } else if (rand <= 0.5) { // follow a follower of @DWR_Tweets
    var params = {
      screen_name: "DWR_Tweets"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
  } else if (rand <= 0.6) { // follow a follower of @designmilk
  var params = {
      screen_name: "designmilk"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
  } else if (rand <= 0.7) { // follow a follower of @ideo
    var params = {
      screen_name: "ideo"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
  } else if (rand <= 0.8) { // follow a follower of @inhabitat
    var params = {
      screen_name: "inhabitat"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
  } else if (rand <= 0.9) { // follow a follower of @freshome
    var params = {
      screen_name: "freshome"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
  } else if (rand <= 1.0) { // follow a follower of @AptTherapy
    var params = {
      screen_name: "AptTherapy"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
  } else if (randn <= 2.9) { //  prune a someone who deosn't follow you back
    bot.prune(function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name
      console.log('\nPrune: unfollowed @'+ name);
    });

  } else {  //  prune a someone who deosn't follow you back
    bot.prune(function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name
      console.log('\nPrune: unfollowed @'+ name);
    });
  }
}, 90000);

function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.message)
  console.error('code: ', err.code);
}
