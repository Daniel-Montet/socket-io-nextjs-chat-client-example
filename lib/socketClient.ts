// import { Socket } from "socket.io-";
import { io, Socket, } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

interface socket extends Socket<DefaultEventsMap, DefaultEventsMap> {
	username?: string
	sessionID?: string
	userID?: string
}

const socket: socket = io('http://localhost:8000', { autoConnect: false });



export default socket;