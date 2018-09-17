const http = require('http'),
      fs = require('fs'),
      PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    fs.readFile('front_page.html', function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});

server.use(express.static('public'));

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}/`);
});
