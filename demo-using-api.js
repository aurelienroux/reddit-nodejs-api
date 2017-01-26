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
// redditLiveConnectedAPI.createUser({
//   username: 'hello231',
//   password: 'xxx'
// }, function(err, user) {
//   if (err) {
//     console.log(err);
//   }
//   else {
    
    // redditLiveConnectedAPI.createPost({
    //   title: 'hi again again reddit!',
    //   url: 'https://www.reddit.com',
    //   userId: 1
    // }, function(err, post) {
    //   if (err) {
    //     console.log(err);
    //   }
    //   else {
    //     console.log(post);
    //   }
    // });
    
  // }
// });


redditLiveConnectedAPI.getAllPosts({}, function(err, result){
  if(err){
    console.log(err);
  }
  else{
    result = result.map(function(ele){
      return {
        id: ele.postId,
        title : ele.title,
        url: ele.url,
        createdAt: ele.postCreatedAt,
        updatedAt: ele.postUpdatedAt,
        userId: ele.userId,
        user: {
          id: ele.userId,
          username: ele.userName,
          createdAt: ele.usersCreatedAt,
          updatedAt: ele.usersUpdatedAt
        }
      }
    });
    
    console.log(result);
    
  }
})