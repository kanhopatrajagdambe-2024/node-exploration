const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>Welcome to CodeWithHarry</h1>");
        res.end();
    }
    if(req.url === '/contact'){
        res.write("Sri sai nagar Hydrabad, Near Piller no 1733");
        res.end();
    }

});

const PORT=3000

server.listen(PORT, ()=>{
    console.log(`Your server is listening on Port:${PORT}`)
})