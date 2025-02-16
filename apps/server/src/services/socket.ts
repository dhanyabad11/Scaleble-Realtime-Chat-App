import { Server } from "socket.io";

class SocketService {
    private _io: Server;

    constructor(server: any) {
        this._io = new Server(server);
    }

    public initListeners() {
        console.log("Init Socket Listeners...");
        this._io.on("connection", (socket) => {
            console.log("New Socket Connected", socket.id);

            socket.on("event:message", async ({ message }: { message: string }) => {
                console.log("New Message Rec.", message);
            });
        });
    }

    get io() {
        return this._io;
    }
}

export default SocketService;
