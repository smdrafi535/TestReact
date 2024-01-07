const http = require('http');
const server = http.createServer((req,res) => {
    //console.log(req)
    if(req.url === '/'){
        res.end('welcome to our home page');
        return;
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
        return;
    }
    //res.write('welcome to our home page');
    res.end(`
    <h1>Oops!</h1>
    <p>We Can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
})
server.listen(5000);