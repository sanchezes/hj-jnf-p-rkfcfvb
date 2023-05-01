// 1)Створити простий веб сервер, використовуючи node.js. При відкриванні у браузері на екран має виводитися довільний текст

// const http = require('http');
// const hostname = 'localhost';
// const port = 8000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-type', 'text/html')
//   res.end(' <p> Hello, світ! </p>');
// });
// server.listen(port, hostname, ()=> {
//     console.log('running');
// });

// 2)Створити простий веб сервер використовуючи node.js. При відкриванні у браузері на екран має виводитися html сторінка з довільною інформацією про
// студента

// const http = require('http');
// const hostname = 'localhost';
// const port = 8000;

//  const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//       'Content-Type' : 'text/html' });
//     res.end('<p>It`s great!</p>');
//   });
//   server.listen(port, hostname, () => {
//       console.log('running');
//   });

//*

const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('text.html', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'})
      return res.end('404 Not Found')
    }  
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
  })
})

server.listen(8000, () => {
  console.log('Server started on port 3000')
})
