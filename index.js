var express = require('express');
var app = express();
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


//EXERCICE 1
// app.get('/hello', function (req, res) {
//     res.send('<h1>Hello '  req.query.name + '!</h1>');
// });


//EXERCICE 2
// app.get('/hello/:test', function (req, res){
//     console.log(res);
//     res.send('<h1>Hello ' + req.params.test +'</h1>')
// })


//EXERCICE 3
// app.get('/op/:tagId', function(req, res){
//     var temp = {
//         operator : req.params.tagId,
//         firstOperand: +req.query.num1,
//         secondOperand: +req.query.num2
//     };
//     console.log(res);
    
//     if (temp.operator === "add"){
//         temp.solution = temp.firstOperand + temp.secondOperand;
//     } else if (temp.operator === "sub"){
//         temp.solution = temp.firstOperand - temp.secondOperand;        
//     } else if (temp.operator === "div"){
//         temp.solution = temp.firstOperand / temp.secondOperand;
//     } else if (temp.operator === "mult"){
//         temp.solution = temp.firstOperand * temp.secondOperand;
//     } else {
//         temp.solution = res.status;
//     }
    
//     res.send(JSON.stringify(temp));
// });

//EXERCICE 4
app.get('/posts', function(req,res){
    redditLiveConnectedAPI.getAllPosts({numPerPage: 5},function(err,resSql){
        var result = `
            <div id="contents">
                <h1>List of contents</h1>
                <ul class="contents-list">`;
                    resSql.forEach(function(post){
                    result += `
                    <li class="content-item">
                        <h2 class="content-item__title">
                            <a href="` + post.url + `">` + post.title + `</a>
                        </h2>
                        <p>Created by ` + post.userName + `</p>
                    </li>
                `;
        });
        result += `</ul></div>`;
        res.send(result);
    });
});


//Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function(){
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Example app listening at http://%s:%s', host, port);
});