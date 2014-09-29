var express = require('express');
var app = express();

var users = [
    { id: 1, name: 'Kyle Broflovski', email:'kyle@southpark.com', role: 'A Jew' },
    { id: 2, name: 'Stan Marsh', email:'stan@southpark.com', role: 'Not a Jew' },
    { id: 3, name: 'Eric Cartman', email:'cartman@southpark.com', role: 'Eats a lot' },
    { id: 4, name: 'Kenny McCormick', email:'kenny@southpark.com', role: 'Dies a lot' }
];

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

app.configure(function () {
    app.use(allowCrossDomain);
    app.use(express.bodyParser());
});

app.get('/', function(req, res) {
    res.json(users);
});

app.listen(process.env.PORT || 9999);