var express = require('express'),
    path =  require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    home = require('./routes/home.js'),
    customers = require('./routes/customers.js');


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', home);
app.get('/contact', customers.contact);
//app.get('/:viewname', customers.view);
app.get('/customers', customers.render);
app.get('/customers/details/:id', customers.details);
app.get('/customers/editCustomer/:id', customers.edit);
app.post('/customers/editCustomer/:id', customers.editCustomer);
app.get('/customers/create', customers.create);
app.post('/customers/create', customers.createCustomer);

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});