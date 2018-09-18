var http = require('http'),
    express = require('express'),
    /*fs = require('fs'),*/
    app = express(),
    /*bodyParser = require ('body-parser'),*/
    PORT = process.env.PORT || 5000;

/*app.use (bodyParser ());*/
var server = http.createServer(app);

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.engine('.html', require('ejs').__express);
app.engine('.png', require('ejs').__express);


app.get ('/', function (req, res){
    console.log ('GET /');
    res.render('front_page.html');
    });

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}/`);
});
