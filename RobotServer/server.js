const WebSocket = require('ws');
const http = require('http');
const app  = require ('./app');
const port =3000;
const express = require('express');
const request = require('request');
const app1 = express();
const server =http.createServer(app);

server.listen(port ,()=>{
    console.log("Listening on port http://localhost:3000) ")
})

const renderStreamURL = 'http://127.0.0.1/receiver/index.html'; // Render Streaming'in HTML sayfasının URL'si

app1.get('/renderstream', (req, res) => {
  request.get(renderStreamURL).pipe(res);
});

app1.listen(8000, () => {
    console.log(`Proxy sunucusu çalışıyor. Port: ${port}`);
  });


