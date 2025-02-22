const http = require('node:http')
const fs = require('node:fs')

// this is executed on every request
const server = http.createServer((req, res) => {
    /// routing
    if(req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/plain"})
        res.end("Home Page")
    } else if(req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/plain"})
        res.end("About Page")
    } else if(req.url === '/api') {
        res.writeHead(200, { "Content-Type": "application/json"})
        res.end(JSON.stringify({
            firstName: 'Viet',
            lastName: 'Dang'
        }))
    } else {
        res.writeHead(404)
        res.end('Page not found')
    }

    /// send TEXT
    // res.writeHead(200, {'Content-Type': 'text/plain'})
    // res.end('Hello world')

    /// send JSON
    // const obj = {
	//     'abc' : 'def',
	//     'def' : 'ghi'
    // }
    // res.writeHead(200, {'Content-Type': 'application/json'})
    // res.end(JSON.stringify(obj))

    /// sending HTML
    // res.writeHead(200, {'Content-Type': 'text/html'})
    
    /// send the entire file
    // const file = fs.readFileSync('index.html', 'utf-8')
    // res.end(file)

    /// send the entire file using streams
    // fs.createReadStream(__dirname + '/index.html', {
    //     encoding: 'utf-8',
    //     highWaterMark: 4
    // }).pipe(res)

    /// using HTML template - string replacement
    // const name = 'Viet'
    // let html = fs.readFileSync('index.html', 'utf-8')
    // html = html.replace("{{name}}", name)
    // res.end(html)
})



server.listen(3000, () => {
    console.log('server running on port 3000')
})