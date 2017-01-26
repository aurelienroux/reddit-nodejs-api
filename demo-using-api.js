// load the mysql library
var mysql = require('mysql');

// create a connection to our Cloud9 server
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'aureroux', // CHANGE THIS :)
  password : '',
  database: 'reddit'
});

// load our API and pass it the connection
var redditApiConfig = require('./reddit');
var redditLiveConnectedAPI = redditApiConfig(connection);

// It's request time!
redditLiveConnectedAPI.createUser({
  username: 'hello23',
  password: 'xxx'
}, function(err, user) {
  if (err) {
    console.log(err);
  }
  else {
    redditLiveConnectedAPI.createPost({
      title: 'hi reddit!',
      url: 'https://www.reddit.com',
      userId: user.id
    }, function(err, post) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(post);
      }
    });
  }
});
