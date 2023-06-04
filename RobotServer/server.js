const http = require('http');
const app  = require ('./app');
const port =3000;

const server =http.createServer(app);

server.listen(port ,()=>{
    console.log("Listening on port http://localhost:3000) ")
})

app.listen(8000, () => {
    console.log(`Proxy server is running Port: ${port}`);
});


