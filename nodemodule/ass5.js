var http=require('http');
var fs=require('fs');
var count=0;
var server=http.createServer(function(req,res){
	
	res.writeHead(200,{'Content-Type':'text/plain'})
	
	
	
	if(req.url == '/count.txt')
	{
		count++;
	}
	
	console.log("count is "+count);
	
	fs.writeFile('count.txt',''+count+'',function(err){
		
		if(!err)
		{
			console.log("Data written");
		}
		else
		{
			console.log("error occured");
		}
	});
	
	fs.readFile('count.txt',function(err,data){
		if(!err)
		{
			return console.error(err);
		}
		else
		{
			return res.end("Visit Count "+cnt);
		}
	})
});

server.listen(9000);
console.log("port 9000 active");







