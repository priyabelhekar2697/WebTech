var ev=require('events');
var fs=require('fs');
var http=require('http');

var ee= new ev.EventEmitter();
ee.addListener('connected',function(){
		
		console.log("Hello");
		var str="user log in at "+new Date().toString()+"\n";
		fs.appendFile('log.txt',str,function(err){
			if(!err)
				console.log("logged in file succsessfully");
		});
	
});

var server=http.createServer(function(req,res){
	if(req.url =='/favicon.ico')
		return;
	
	ee.emit('connected');
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("<p> This request has been logged </p>");
    res.end(); 
	
});

server.listen(9000);
console.log("port 9000 activated");