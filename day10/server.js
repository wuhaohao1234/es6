var http = require("http");          
var url = require('url');           
var fs = require('fs');
http.createServer(function (request,response) {
	response.writeHead(200,{"contest-type":"text/plan"})
	var portname = url.parse(request.url, true).pathname;
	if(portname == "/index.html"){
		fs.readFile('./index.html', (err, data) => {
			// 响应前端jsonp请求
			response.end(data);	
			//command line 端信息
			
			console.log("--------------------------------------------------------");
		})
	}

}).listen(81)