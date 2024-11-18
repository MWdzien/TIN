const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (req.method === 'GET' && parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
            <body>
            <form action="/result" method="POST">
                <input type="text" name="val">
                    <button type="submit">Submit</button>
            </form>
            </body>
            </html>
            
    `);
    } else if (req.method === 'POST' && parsedUrl.pathname === '/result') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>${querystring.parse(body).val}</h1>`);
        });
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end(`<h1>Error</h1>`)
    }
    });

    server.listen(3000, () => {
        console.log("http://localhost:3000")
    });