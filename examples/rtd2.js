//
//  RTD2 - Twitter bot that tweets about the most popular github.com news
//  Also makes new friends and prunes its followings.
//
var Bot = require('./bot')
  , config1 = require('../config1');

var bot = new Bot(config1);

console.log('RTD2: Running.');

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
  var rand = Math.random();

  if(rand <= 0.05) {      //  searchfollow for "nature and design"
    var params = {
        q: '"nature and design"'
      , since: datestring()
      , result_type: "mixed"
    };
    console.log(params)
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" + name);
    });
  } else if(rand <= 0.10) { // favorite "nature and design"
     var params = {
        q: '"nature and design"'
      , since: datestring()
      , result_type: "mixed"
    };
 
    console.log(params)
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id + reply.text);
    });
  } else if(rand <= 0.15) {// favorite "nature inspired design"
     var params = {
        q: '"nature inspired design"'
      , since: datestring()
      , result_type: "mixed"
    };
 
    console.log(params)
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id + reply.text);
    });
  } else if(rand <= 0.20) {//  searchfollow for "nature inspired design"
    var params = {
        q: '"nature inspired design"'
      , since: datestring()
      , result_type: "mixed"
    };
 
    console.log(params)
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" + name);
    });
  } else if(rand <= 0.25) {
    //  searchfollow for "interior design inspiration"
    var params = {
        q: "interior design inspiration"
      , since: datestring()
      , result_type: "mixed"
    };
 
    console.log(params)
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" + name);
    });
  } else if(rand <= 0.30) {// favorite "interior design ninspiration"
     var params = {
        q: "interior design inspiration"
      , since: datestring()
      , result_type: "mixed"
    };
 
    console.log(params)
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id + reply.text);
    });

  } else if(rand <= 0.35) {
    bot.mingle(function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name);
    });
  } else if(rand <= 0.40) {
    // favorite "organic architecture"
     var params = {
        q: '"living architecture"'
      , since: datestring()
      , result_type: "mixed"
    };
 
    console.log(params)
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id + reply.text);
    });
  } else if(rand <= 0.45) { 
 //  searchfollow for "organic architecture"
    var params = {
        q: '"living architecture"'
      , since: datestring()
      , result_type: "mixed"
    };
 
    console.log(params)
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" + name);
    });
 
  } else if(rand <= 0.50) {   // favroite "dedon"   
    var params = { 
        q: "dedon"
      , since: datestring()
      , result_type: "mixed"
    };
 
    console.log(params)
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id + reply.text);
    });
  } else if(rand <= 0.55) {  //  searchfollow for "dedon"
    var params = {
        q: "dedon"
      , since: datestring()
      , result_type: "mixed"
    };
 
    console.log(params)
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" + name);
    });
  } else if(rand <= 0.60) { //  searchfollow for "indoor gardening"
    var params = {
        q: "indoor gardening"
      , since: datestring()
      , result_type: "mixed"
    };
 
    console.log(params)
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" + name);
    });
  } else if(rand <= 0.65) { 
    bot.mingle(function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name);
    });
  } else if(rand <= 0.70) {   // favroite "indoor garden"   
    var params = { 
        q: "indoor gardening"
      , since: datestring()
      , result_type: "mixed"
    };
 
    console.log(params)
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id + reply.text);
    });
    } else if(rand <= 0.75) {   // favroite "interior design"   
    var params = { 
        q: "interior design"
      , since: datestring()
      , result_type: "mixed"
    };
 
    console.log(params)
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id);
    });} else if(rand <= 0.80) {  //  searchfollow for "interior design"
    var params = {
        q: "interior design"
      , since: datestring()
      , result_type: "mixed"
    };
 
    console.log(params)
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" + name);
    });
    
  } else {                  //  prune a friend
    bot.prune(function(err, reply) {
      if(err) return handleError(err);

      var name = reply.screen_name
      console.log('\nPrune: unfollowed @'+ name);
    });
  }
}, 90000);

function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.data);
}
