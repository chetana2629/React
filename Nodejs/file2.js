var fs = require('fs');
fs.readFile("dummy.html","utf-8", function(err, data){
if(err){
    console.log(err);
}
else{
    console.log(data);
}
})

console.log("operation complete");