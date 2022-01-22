// import { Socket } from "socket.io-";
import { io, Socket, } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

interface socket extends Socket<DefaultEventsMap, DefaultEventsMap> {
	username?: string
	sessionID?: string
	userID?: string
}

const server_url = process.env.NODE_ENV === "production" ? process.env.SERVER_URL : 'http://localhost:8000';
const socket: socket = io(server_url!, { autoConnect: false });



export default socket;