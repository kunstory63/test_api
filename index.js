// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
// Add this before server.use(router)
server.use(router);
// Listen to port
server.listen(port);
