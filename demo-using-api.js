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

// ITS'S REQUEST TIME! CREATE A USER AND POST
// redditLiveConnectedAPI.createUser({
//   username: 'hello231',
//   password: 'xxx'
// }, function(err, user) {
//   if (err) {
//     console.log(err);
//   }
//   else {

    //CREATE POST
    redditLiveConnectedAPI.createPost({
      title: 'ipad air',
      url: 'https://www.ipadair.com',
      userId: 1
    }, function(err, post) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(post);
      }
    });
    
  // }
// });






