var http=require('http');
// console.log(http);
http.createServer(function(req,res ){

    res.end('Live server');
})
.listen(9000)
