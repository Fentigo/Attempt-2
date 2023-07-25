// this is creating a server with Express
const express = require('express');
const app = express();
const morgan = require('morgan');
app.set('view engine', 'ejs');


app.listen(3000);
//making middleware

app.use((req,res, next) =>{
    console.log(' first middleware used: new request made: ')
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ',req.method);
    next();
});

app.use(morgan('dev'));

app.get('/', (req, res)=>{
    const blogs =[
        {title: 'Placeholder 1', snippet: ' adfsdgh'},
        {title: 'Placeholder 2', snippet: ' adfsdgh'},
        {title: 'Placeholder 3', snippet: ' adfsdgh'},
        {title: 'Placeholder 4', snippet: ' adfsdgh'},
    ];
    
    res.render('index',{title: 'Home', blogs}); //because of this, we don't need to set header
});
app.get('/about', (req, res)=>{
    
    res.render('about') //because of this, we don't need to set header
});
app.get('/404', (req, res)=>{
    
    res.render('404'); //because of this, we don't need to set header
});
app.get('/create', (req, res)=>{
    
    res.render('create'); //because of this, we don't need to set header
});
app.get('/Manage',(req,res)=>{
    res.render('Manage');
});
app.get('/add',(req,res)=>{
    res.render('add');
});
app.get('/remove',(req,res)=>{
    res.render('remove');
});
app.get('/view-all',(req,res)=>{
    res.render('view_employee');
});
app.get('/dashboard', (req, res)=>{
    
    res.render('dashboard') //because of this, we don't need to set header
});
app.get('/front-page',(req,res)=>{
    res.render('front_page');
});
app.use((req, res)=>{
    
    res.render('404'); //because of this, we don't need to set header
});

//redirects
