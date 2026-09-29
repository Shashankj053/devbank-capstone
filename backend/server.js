const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url === '/api' || req.url === '/api/') {
        res.writeHead(200);

        res.end(JSON.stringify({
            application: 'DevBank',
            service: 'Backend',
            message: 'DevBank Backend API is running',
            status: 'success'
        }));

    } else if (req.url === '/health') {
        res.writeHead(200);

        res.end(JSON.stringify({
            status: 'healthy'
        }));

    } else {
        res.writeHead(404);

        res.end(JSON.stringify({
            error: 'Route not found'
        }));
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`DevBank Backend running on port ${PORT}`);
});
