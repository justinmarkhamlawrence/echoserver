var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});

// app.get('/:firstname/:lastname', function(request, response) {
//     var first = request.params.firstname;
//     var last = request.params.lastname;
//     response.send(["Hello", first, last].join(" "));
// });

app.get('/headers', function(request, response) {
    response.json(request.headers);
    
});

app.get('/headers/:header_name', function(request, response) {
    var headerName = request.params.header_name;
    var headerPath = request.headers[headerName];
    response.json(headerPath);
    
});
app.listen(process.env.PORT, process.env.IP);