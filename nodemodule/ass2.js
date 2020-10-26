var h=require('http');

var server=h.createServer(function(err,data){

		data.writeHead(200,{'Content-Type':'text/html'})//request sending
		data.write("<h1>Hello from js</h1>");

});
server.listen(9000);
console.log("Hello");