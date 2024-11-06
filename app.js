const http = require("http");   
const fs = require("fs");   
const url = require("url");   
const mimetypelookup = require("mime-types").lookup;   

const server = http.createServer(function(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const file_path = parsedUrl.pathname;  // Use pathname, not the full path
    


    if (file_path === '/abebe.html') {
        // Construct the full path to the file
        var rfilename = __dirname + file_path;
        
        console.log(rfilename);
        
        fs.readFile(rfilename, function(err, data){
            if(err){
                
                res.writeHead(404)
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});  // Set proper content type
                res.end(data);
            }
        })    
        
    }
    else if(file_path === '/'){
        var rfilename = __dirname + '/apple/apple.html';
        fs.readFile(rfilename, function(err, data){
            if(err){
                
                res.writeHead(404)
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});  // Set proper content type
                res.end(data);
            }
        })    
    
    }

     else {
        // For other requests, send a generic message
        res.writeHead(200, {'Content-Type': 'text/plain'});  // Set proper content type
        res.end("Hey there");
    }
});
const port = 1234
server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
