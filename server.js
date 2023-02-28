const http=require("http");   
const fs=require("fs");    //fs is used for readfile,write,delete,update
const file=fs.readFileSync('index.html');     
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-type':'text/html'       //plain=full file
    })
    res.end(file)
})
server.listen(5000,()=>{console.log("The server is up at port 5000");})
