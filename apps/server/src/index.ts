import http from "http";
import SocketService from "./services/socket";

async function init() {
    const httpServer = http.createServer();
    const PORT = process.env.PORT ? process.env.PORT : 8000;

    SocketService.io.attach(httpServer); // Pass the server instance

    httpServer.listen(PORT, () => console.log(`HTTP Server started at PORT:${PORT}`));
    SocketService.initListeners();
}
