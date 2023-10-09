const jsonServer = require('json-server');
const path = require('path');
const http = require('http');


const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

server.use(router);

// запуск сервера
const HTTP_PORT = 8000;

const httpServer = http.createServer(server);

httpServer.listen(HTTP_PORT, () => {
    console.log(`server is running on ${HTTP_PORT} port`);
});
