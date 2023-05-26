const express = require('express');
const server = express();
const getCharById = require("./controllers/getCharById")
const getCharDetail = require("./controllers/getCharDetail")
const PORT = 3001;

server.get("/rickandmorty/character/:id",(req,res)=>{
    const {id} = req.params
    return getCharById(res,id)
})

server.get("/rickandmorty/detail/:id",(req,res)=>{
    const {id} = req.params
    return getCharById(res,id)
})

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});




//------------------------------------------------


/*SERVIDOR VANILLA
const http = require("http")
const fs = require("fs");
const getCharById = require("./controllers/getCharById")
const getCharDetail = require("./controllers/getCharDetail")



http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req
    
    if(url.includes("/rickandmorty/character")){
        const id = url.split("/").at(-1)
        return getCharById(res,id)
    }if(url.includes("/rickandmorty/detail")){
        const id = url.split("/").at(-1)
        return getCharDetail(res,id)
    }

    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("Hola")
    
}).listen(3001,"localhost")*/