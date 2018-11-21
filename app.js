const express = require('express');
const hbs = require('hbs');


const port = process.env.PORT || 3000 ;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.send('Ram is a good boy');
});
console.log('Ram');

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pagetitle: 'Projects'
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});