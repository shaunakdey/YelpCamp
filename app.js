var app = require('express')();
var bodyParser = require('body-parser');
var campgrounds = [
    {name: 'Salmon Creek', image: 'https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d1156d3e4dfafbc71a9f293939f3243&auto=format&fit=crop&w=1095&q=80'},
    {name: 'Granite Hill', image: 'https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f0bb0006c15a626dab0a5025e7838fa&auto=format&fit=crop&w=1050&q=80'},
    {name: 'Mountain Creek', image: 'https://images.unsplash.com/photo-1485343034225-9e5b5cb88c6b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a28fc68742556a682ecac876ab4b9c2c&auto=format&fit=crop&w=1050&q=80'},
    {name: 'Salmon Creek', image: 'https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d1156d3e4dfafbc71a9f293939f3243&auto=format&fit=crop&w=1095&q=80'},
    {name: 'Granite Hill', image: 'https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f0bb0006c15a626dab0a5025e7838fa&auto=format&fit=crop&w=1050&q=80'},
    {name: 'Mountain Creek', image: 'https://images.unsplash.com/photo-1485343034225-9e5b5cb88c6b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a28fc68742556a682ecac876ab4b9c2c&auto=format&fit=crop&w=1050&q=80'},
    {name: 'Salmon Creek', image: 'https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d1156d3e4dfafbc71a9f293939f3243&auto=format&fit=crop&w=1095&q=80'},
    {name: 'Granite Hill', image: 'https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f0bb0006c15a626dab0a5025e7838fa&auto=format&fit=crop&w=1050&q=80'},
    {name: 'Mountain Creek', image: 'https://images.unsplash.com/photo-1485343034225-9e5b5cb88c6b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a28fc68742556a682ecac876ab4b9c2c&auto=format&fit=crop&w=1050&q=80'}
];

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){    
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res){
    // res.send('POST route!');
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name: name, image: image};
    campgrounds.push(newCamp);
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res){
    res.render('new');
});

var port = 3000;
app.listen(port, function(){
    console.log("Yelpcamp server has started on port: " + port + " ...");
});