var express = require('express');
var app = express();

var users = [
    { id: 1, name: 'Kyle Broflovski', age: 10, sex: 'Male', badLuck: 165 },
    { id: 2, name: 'Stan Marsh', age: 10, sex: 'Male', badLuck: 167 },
    { id: 3, name: 'Eric Cartman', age: 10, sex: 'Male', badLuck: 33 },
    { id: 4, name: 'Kenny McCormick', age: 10, sex: 'Male', badLuck: 9999 },
    { id: 5, name: 'Randy Marsh', age: 42, sex: 'Male', badLuck: 375 },
    { id: 6, name: 'Jerome McElroy', age: 40, sex: 'Male', badLuck: 750 },
    { id: 7, name: 'Herbert Garrison', age: 41, sex: 'Male', badLuck: 678 },
    { id: 8, name: 'Timmy Burch', age: 10, sex: 'Male', badLuck: 0 },
    { id: 9, name: 'Jimmy Valmer', age: 10, sex: 'Male', badLuck: 5 },
    { id: 10, name: 'Mr. Mackey', age: 48, sex: 'Male', badLuck: 876 },
    { id: 11, name: 'Tweek Tweak', age: 10, sex: 'Male', badLuck: 456 },
    { id: 12, name: 'Token Black', age: 10, sex: 'Male', badLuck: 528 },
    { id: 13, name: 'Officer Barbrady', age: 30, sex: 'Male', badLuck: 10 },
    { id: 14, name: 'Sir Ike Moisha Broflovski', age: 5, sex: 'Male', badLuck: 3 },
    { id: 15, name: 'Towelie', age: 17, sex: 'Male', badLuck: 911 },
    { id: 16, name: 'Mr. Slave', age: 40, sex: 'Ooh, Jesus Christ!', badLuck: 69 },
    { id: 17, name: 'Jimbo Kern', age: 51, sex: 'Male', badLuck: 321 },
    { id: 18, name: 'Ned Gerblansky', age: 50, sex: 'Male', badLuck: 432 },
    { id: 19, name: 'Mr. José Venezuela', age: 40, sex: 'Male', badLuck: 777 },
    { id: 20, name: 'Mr. Twig', age: 2, sex: 'Male', badLuck: 1 },
    { id: 21, name: 'Tuong Lu Kim', age: 61, sex: 'Male', badLuck: 716 },
    { id: 22, name: 'Sir Phillip Niles Argyle', age: 54, sex: 'Male', badLuck: 6 },
    { id: 23, name: 'Sir Terrance Henry Stoot', age: 55, sex: 'Male', badLuck: 6 },
    { id: 24, name: 'Dr. Alphonse Mephesto', age: 70, sex: 'Male', badLuck: 258 },
    { id: 25, name: 'Wendy Testaburger', age: 10, sex: 'Female', badLuck: 159 },
    { id: 26, name: 'Bebe Stevens', age: 10, sex: 'Female', badLuck: 195 },
    { id: 27, name: 'Mr. Hankey the Christmas Poo', age: 2000, sex: 'Male', badLuck: 0 },
    { id: 28, name: 'Sheila Broflovski', age: 41, sex: 'Female', badLuck: 212 },
    { id: 29, name: 'Liane Cartman', age: 42, sex: 'With man and women', badLuck: 696 },
    { id: 30, name: 'Leopold Stotch', age: 10, sex: 'Male', badLuck: 2245 }
];

app.get('/user', function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        res.json(users);
    }

});

app.listen(process.env.PORT || 3412);
console.log('Server running at http://localhost:3412');