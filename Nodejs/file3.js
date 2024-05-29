var fs = require("fs");
var http= require("http");

http.createServer(function(req, res){
fs.readFile("dummy.html","utf-8",function(err,data){
    if(!err){
        res.end(data);
    }
})
}).listen(9000);