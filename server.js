const http = require('http');
const fs = require('fs');
const lo = require('lodash');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type','text/html');


    let path = './views';
  switch (req.url) {
    case '/':
      path += '/index.html';
      break;
    case '/about':
      path += '/about.html';
      break;
    case '/404':
        path += '/404.html' ;
    default:
      path += '/404.html';
  }
  
  //sending html
  
  fs.readFile(path, (err, data) => {
    if (err) {
        console.log(err);
        res.end();    
    } else {
        //res.write(data);
        res.end(data);
        }
 
    });


});

server.listen(3000, 'localhost', () =>{
    console.log('listening for requests, bro')
});
