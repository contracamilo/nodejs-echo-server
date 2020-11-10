const http = require('http');
const url = require('url');


const server = new http.Server((req, res) => {  
    console.log(req.headers );

    var urlParsed = url.parse(req.url, true);
 
    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        res.writeHeader(200, "OK", {'Cache-control':'no-cache'});
        res.statusCode = 200; // Ok
        res.end( urlParsed.query.message );
    } else {
        res.statusCode = 404; // Not Found
        res.end("Page not found");
    }
});

server.listen(3000, '127.0.0.1')