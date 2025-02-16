import http from "http";
import SocketService from "./services/socket";

async function init() {
    const httpServer = http.createServer();
    const PORT = process.env.PORT || 8000;

    const socketService = new SocketService(httpServer); // Pass the server instance

    socketService.initListeners(); // Initialize socket listeners

    httpServer.listen(PORT, () => console.log(`HTTP Server started at PORT:${PORT}`));
}

init();
