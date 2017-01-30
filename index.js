var express = require('express');
var app = express();


//EXERCICE 1 & 2
// app.get('/hello', function (req, res) {
//     res.send('<h1>Hello '  req.query.name + '!</h1>');
// });


//EXERCICE 3
// app.get('/hello/:test', function (req, res){
//     console.log(res);
//     res.send('<h1>Hello ' + req.params.test +'</h1>')
// })


//EXERCICE 3
app.get('/op/:tagId', function(req, res){
    var temp = {
        operator : req.params.tagId,
        firstOperand: +req.query.num1,
        secondOperand: +req.query.num2
    };
    console.log(res);
    
    if (temp.operator === "add"){
        temp.solution = temp.firstOperand + temp.secondOperand;
    } else if (temp.operator === "sub"){
        temp.solution = temp.firstOperand - temp.secondOperand;        
    } else if (temp.operator === "div"){
        temp.solution = temp.firstOperand / temp.secondOperand;
    } else if (temp.operator === "mult"){
        temp.solution = temp.firstOperand * temp.secondOperand;
    } else {
        temp.solution = res.status;
    }
    
    res.send(JSON.stringify(temp));
});





//Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function(){
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Example app listening at http://%s:%s', host, port);
});