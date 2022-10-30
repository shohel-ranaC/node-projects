const http = require('http');
const fs = require('fs');
// const PORT = 3000;
const PORT = process.env.PORT;


const handleReadFile = (fileName, statusCode, req, res)=>{
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.writeHead(statusCode, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
}

const server = http.createServer((req, res) => {
    // res.end('welcome to server');
    if (req.url === '/') {
      handleReadFile('./home/index.html', 200, req, res);
    }
    else if (req.url === '/about') {
        handleReadFile('./home/about.html', 200, req, res);
      }
      else if (req.url === '/contact') {
        handleReadFile('./home/contact.html', 200, req, res);
      }
      else {
        handleReadFile('./home/error.html', 404, req, res);
      }
});

server.listen(PORT, ()=>{
    console.log(`Server is running`);
});
