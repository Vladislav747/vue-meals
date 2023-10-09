const fs = require('fs');
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

server.get('/token', (req, res) => {
    const db = router.db; // lowdb instance
    const token = db.get('token.key').value();
    res.status(200).send(token);
});

server.get('/orgs/info', (req, res) => {
    const db = router.db; // lowdb instance
    const token = db.get('token.key').value();
    res.status(200).send({
        "ID": 68,
        "Title": "Smu",
        "ClientID": "smuadmin",
        "ClientPassword": "smupassword",
        "Entrypoint": "CITY"
    });
});



server.use(router);

// запуск сервера
const PORT = 8443;
const HTTP_PORT = 8000;

const httpServer = http.createServer(server);

httpServer.listen(HTTP_PORT, () => {
    console.log(`server is running on ${HTTP_PORT} port`);
});
