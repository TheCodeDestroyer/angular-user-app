var express = require('express');
var app = express();

var users = [
    { id: 1, name: 'Kyle Broflovski', age: 10, sex: 'Male', badLuck: 165, bestQuote: 'Oh my god the killed Kenny!' },
    { id: 2, name: 'Stan Marsh', age: 10, sex: 'Male', badLuck: 167, bestQuote: 'Oh my god the killed Kenny!' },
    { id: 3, name: 'Eric Cartman', age: 10, sex: 'Male', badLuck: 33, bestQuote: 'Screw you guys Im goin home!' },
    { id: 4, name: 'Kenny McCormick', age: 10, sex: 'Male', badLuck: 9999, bestQuote: 'Mmmm mmmm mmmmm!' },
    { id: 5, name: 'Randy Marsh', age: 42, sex: 'Male', badLuck: 375, bestQuote: 'Hes homeless now. We arent safe' },
    { id: 6, name: 'Jerome McElroy', age: 40, sex: 'Male', badLuck: 750, bestQuote: 'Fudge you!' },
    { id: 7, name: 'Herbert Garrison', age: 41, sex: 'Male', badLuck: 678, bestQuote: 'THIS - IS - LESBOS!' },
    { id: 8, name: 'Timmy Burch', age: 10, sex: 'Male', badLuck: 0, bestQuote: 'Timmey!!!' },
    { id: 9, name: 'Jimmy Valmer', age: 10, sex: 'Male', badLuck: 5, bestQuote: 'H-h-h-h-hello' },
    { id: 10, name: 'Mr. Mackey', age: 48, sex: 'Male', badLuck: 876, bestQuote: 'Drugs are bad kids, mkay!' },
    { id: 11, name: 'Tweek Tweak', age: 10, sex: 'Male', badLuck: 456, bestQuote: 'This is too much pressure. AHH!!' },
    { id: 12, name: 'Token Black', age: 10, sex: 'Male', badLuck: 528, bestQuote: 'I dont want the codename blackie' },
    { id: 13, name: 'Officer Barbrady', age: 30, sex: 'Male', badLuck: 10, bestQuote: 'Move along, nothing to see here' },
    { id: 14, name: 'Sir Ike Moisha Broflovski', age: 5, sex: 'Male', badLuck: 3, bestQuote: 'Dont kick da baby' },
    { id: 15, name: 'Towelie', age: 17, sex: 'Male', badLuck: 911, bestQuote: 'You wanna get high?' },
    { id: 16, name: 'Mr. Slave', age: 40, sex: 'Male', badLuck: 69, bestQuote: 'Ooh, Jesus Christ!' },
    { id: 17, name: 'Jimbo Kern', age: 51, sex: 'Male', badLuck: 321, bestQuote: 'Thats the wrong way, you stupid cow' },
    { id: 18, name: 'Ned Gerblansky', age: 50, sex: 'Male', badLuck: 432, bestQuote: 'It looks like my ex-wife' },
    { id: 19, name: 'Mr. José Venezuela', age: 40, sex: 'Male', badLuck: 777, bestQuote: '...' },
    { id: 20, name: 'Mr. Twig', age: 2, sex: 'Male', badLuck: 1, bestQuote: '...' },
    { id: 21, name: 'Tuong Lu Kim', age: 61, sex: 'Male', badLuck: 716, bestQuote: 'Welcome to the shitty wok!' },
    { id: 22, name: 'Sir Phillip Niles Argyle', age: 54, sex: 'Male', badLuck: 6, bestQuote: 'Oh, you shitfaced cockmaster!' },
    { id: 23, name: 'Sir Terrance Henry Stoot', age: 55, sex: 'Male', badLuck: 6, bestQuote: 'Youre a huge fan alright!' },
    { id: 24, name: 'Dr. Alphonse Mephesto', age: 70, sex: 'Male', badLuck: 258, bestQuote: 'We can correct all of Gods mistakes, like Germans' },
    { id: 25, name: 'Wendy Testaburger', age: 10, sex: 'Female', badLuck: 159, bestQuote: 'Dont f*** with me!' },
    { id: 26, name: 'Bebe Stevens', age: 10, sex: 'Female', badLuck: 195, bestQuote: 'I want a Starvin Marvin!' },
    { id: 27, name: 'Mr. Hankey the Christmas Poo', age: 40, sex: 'Male', badLuck: 0, bestQuote: 'Howdy ho!' },
    { id: 28, name: 'Sheila Broflovski', age: 41, sex: 'Female', badLuck: 212, bestQuote: 'Never invite a New Jersey housewife into your home' },
    { id: 29, name: 'Liane Cartman', age: 42, sex: 'Female', badLuck: 696, bestQuote: 'Erics not fat. Hes just big boned' },
    { id: 30, name: 'Leopold Stotch', age: 10, sex: 'Male', badLuck: 2245, bestQuote: 'HEY! My uncle bud did that to me once...' }
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