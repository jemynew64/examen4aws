// app.js

const http = require("http");

const hostname = "0.0.0.0"; // Aceptar todas las conexiones
const port = 3000; // Puerto en el que se ejecutará el servidor

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola Mundo desde Node.js!\n");
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
