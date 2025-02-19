import { Server } from "socket.io";

class SocketService {
    static io: any;
    static initListeners() {
        throw new Error("Method not implemented.");
    }
    private _io: Server;

    constructor() {
        console.log("Init Socket Service. . .");
        this._io = new Server({
            cors: {
                allowedHeaders: ["*"],
                origin: "*",
            },
        });
    }

    public initListeners() {
        const io = this.io;

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
