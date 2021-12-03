const http = require('http')

const server = http.createServer((req, res) =>{
	if(req.url === '/'){
		res.end('Welcome home page')
	}
	if (req.url === '/about'){
		res.end('Here is history')
	}
	res.end(`<h1>Ooops!</h1>`)
})

server.listen(3000)