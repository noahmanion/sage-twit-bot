//
//  RTD2 - Twitter bot that tweets about the most popular github.com news
//  Also makes new friends and prunes its followings.
//
var Bot = require('./bot')
  , config1 = require('../config1.js');

var bot = new Bot(config1);

console.log('RTD4: The Special Edition: Running...');

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
  });
  var rand = Math.floor((Math.random() * 200) + 1);
  if(rand <= 5) { 
    
  } else if(rand <= 10) { //searchfollow for #chicagobiennial
    var params = { 
       q: "chicagobiennial"
      , since: datestring()
      , result_type: "mixed" 
    };
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" +name);
    });
  } else if(rand <= 15) { // favorite for #OHC2015
    var params = {
      q: "OHC2015"
      , since: datestring()
      , result_type: "mixed"
    };
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);

      console.log("\nFavorite: Favorited response: " + reply.id + ": " + reply.text + " by @" + reply.screen_name);

    });
  } else if(rand <= 20) { // follow a follower of @chiarchitecture
    var params = {
      screen_name: "chiarchitecture"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
  } else if(rand <= 25) { //searchfollow for #ChicagoBiennial 
    var params = { 
       q: "ChicagoBiennial"
      , since: datestring()
      , result_type: "mixed" 
    };
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" +name);
    });
  } else if(rand <= 30) { // favorite for #ChicagoBiennial 
    var params = {
      q: "ChicagoBiennial"
      , since: datestring()
      , result_type: "mixed"
    };
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);

      console.log("\nFavorite: Favorited response: " + reply.id + ": " + reply.text + " by @" + reply.screen_name);

    });
  } else if(rand <= 35) { // follow a follower of @chicagobiennial
    var params = {
      screen_name: "chicagobiennial"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
  } else if(rand <= 40) { //searchfollow for #CIW 
    var params = { 
       q: "#CIW"
      , since: datestring()
      , result_type: "mixed" 
    };
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" +name);
    });
  } else if(rand <= 45) { // favorite for #CIW
    var params = {
      q: "#CIW"
      , since: datestring()
      , result_type: "mixed"
    };
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);

      console.log("\nFavorite: Favorited response: " + reply.id + ": " + reply.text + " by @" + reply.screen_name);

    });
  } else if(rand <= 50) {  // follow a follower of @chicagoideas
    var params = {
      screen_name: "chicagoideas"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
  } else if(rand <= 55) { //searchfollow for #DODNY 
    var params = { 
       q: "DODNY"
      , since: datestring()
      , result_type: "mixed" 
    };
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" +name);
    });
 
  } else if(rand <= 60) { 
     // favorite for #DODNY
    var params = {
      q: "DODNY"
      , since: datestring()
      , result_type: "mixed"
    };
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);

      console.log("\nFavorite: Favorited response: " + reply.id + ": " + reply.text + " by @" + reply.screen_name);

    });
  } else if(rand <= 65) {  // follow a follower of @DwellonDesign
    var params = {
      screen_name: "DwellonDesign"
    };
    bot.mingleUser(params, function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name + ", follower of @" + params.screen_name);
    });
 
  } else if(rand <= 70) {   //  prune a friend
    bot.prune(function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name
      console.log('\nPrune: unfollowed @'+ name);
    });

  } else if(rand <= 99) {  //  prune a friend
    bot.prune(function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name
      console.log('\nPrune: unfollowed @'+ name);
    });

  } else if(rand <= 150) {  //  prune a friend
    bot.prune(function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name
      console.log('\nPrune: unfollowed @'+ name);
    });

  } else { //  prune a friend
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
