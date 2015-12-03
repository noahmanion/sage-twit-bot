//
//  RTD2 - Twitter bot that tweets about the most popular github.com news
//  Also makes new friends and prunes its followings.
//
var Bot = require('./bot')
  , config1 = require('../config1');

var bot = new Bot(config1);

console.log('SGL bot is now running...');

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

  if(rand <= 0.03) {      //  searchfollow for "nature and design"
    var params = {
        q: "urbanfarming"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" + name);
    });
  } else if(rand <= 0.06) { // favorite "nature and design"
     var params = {
        q: "urbanfarming"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id + reply.text);
    });
  } else if(rand <= 0.09) {// favorite "nature inspired design"
     var params = {
        q: "buy plants"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id + reply.text);
    });
  } else if(rand <= 0.12) {//  searchfollow for "nature inspired design"
    var params = {
        q: "buy plants"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" + name);
    });
  } else if(rand <= 0.15) {
    //  searchfollow for "interior design inspiration"
    var params = {
        q: "aerogarden"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" + name);
    });
  } else if(rand <= 0.18) {// favorite "interior design ninspiration"
     var params = {
        q: "aerogarden"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id + reply.text);
    });

  } else if(rand <= 0.21) {
    bot.mingle(function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name);
    });
  } else if(rand <= 0.24) {
    // favorite "organic architecture"
     var params = {
        q: "homedesign"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id + reply.text);
    });
  } else if(rand <= 0.27) { 
 //  searchfollow for "organic architecture"
    var params = {
        q: "homedesign"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" + name);
    });
 
  } else if(rand <= 0.30) {   // favroite "dedon"   
    var params = { 
        q: "need houseplants"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id + reply.text);
    });
  } else if(rand <= 0.33) {  //  searchfollow for "dedon"
    var params = {
        q: "need houseplants"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" + name);
    });
  } else if(rand <= 0.36) { //  searchfollow for "indoor gardening"
    var params = {
        q: "plantdesign"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
    bot.searchFollow(params, function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nSearchFollow: followed @" + name);
    });
  } else if(rand <= 0.39) { 
    bot.mingle(function(err, reply) {
      if(err) return handleError(err);
 
      var name = reply.screen_name;
      console.log("\nMingle: followed @" + name);
    });
  } else if(rand <= 0.42) {   // favroite "indoor garden"   
    var params = { 
        q: "plantdesign"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id + reply.text);
    });
    } else if(rand <= 0.45) {   // favroite "interior design"   
    var params = { 
        q: "plantlove"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id);
    });
    } 
    else if(rand <= 0.48) {   // favroite "interior design"   
    var params = { 
        q: "houseplants"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
    bot.favorite(params, function(err, reply) {
      if(err) return handleError(err);
 
      console.log("\nFavorite: favorited response: " + reply.id);
    });
    } else if(rand <= 0.50) {  //  searchfollow for "interior design"
    var params = {
        q: "plantlove"
      , since: datestring()
      , result_type: "mixed"
      , iso_language_code: "en"
      , lang: "en"
    };
 
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
  console.error('message', err.message);
}
