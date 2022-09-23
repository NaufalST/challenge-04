const http = require('http');
 const { PORT = 5000 } = process.env;
 const fs = require('fs');
 const path = require('path');
 const PUBLIC_DIRECTORY = path.join(__dirname, 'public');
 
 function getHTML(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath, 'utf-8')
}

function onRequest(req, res) {
  switch(req.url) {
    case "/":
      res.writeHead(200)
      res.end(getHTML("index.html"))
      return;
    case "/cars":
      res.writeHead(200)
      res.end(getHTML("list-car.html"))
      return;
    default:
      res.writeHead(404)
      res.end(getHTML("404.html"))
      return;
  }
}

const server = http.createServer(onRequest);

// Jalankan server
server.listen(PORT, '127.0.0.1', () => {
 console.log("Server sudah berjalan, silahkan buka http://127.0.0.1:%d", PORT);
})

// const http = require("http"); 
// const { PORT = 8000 } = process.env; 
// const hostName = "localhost"; 
// const fs = require("fs"); 
// const url = require("url"); 
// const path = require("path"); 
// const mime = require("mime-types"); 
// const PUBLIC_DIRECTORY = path.join(__dirname, 'public'); 

// const onRequest = (req, res) => { 
//   let parsedURL = url.parse(req.url, true); 
//   let path = parsedURL.path.replace(/^\/+|\/+$/g, ""); 
//   if (path == "") { 
//     path = "index.html"; 
//   } 
//   else if (path == "cars") { 
//     path = "list-cars.html"; 
//   } 
//   let file = PUBLIC_DIRECTORY + path; 

//   fs.readFile(file, function (err, content) { 
//     if (err) { 
//       console.log("File Not Found ${file}"); 
//       res.writeHead(404); res.end(); 
//     } 
//     else { // content response console.log(Returning ${path}); 
//       res.setHeader("X-Content-Type-Options", "nosniff"); 
//       let type = mime.lookup(path); 
//       res.writeHead(200, { "Content-type": type }); 
//       res.end(content); 
//     } 
//   }); 
// }; 
    // http.createServer(onRequest) .listen(PORT, () => { 
    //   console.log("Server listen on ${hostName}:${PORT}"); 
    // });
