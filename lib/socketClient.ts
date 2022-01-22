// import { Socket } from "socket.io-";
import { io, Socket, } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

interface socket extends Socket<DefaultEventsMap, DefaultEventsMap> {
	username?: string
	sessionID?: string
	userID?: string
}

const server_url = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:8000';
console.log(process.env.NODE_ENV)
console.log(process.env.NEXT_PUBLIC_SERVER_URL)
const socket: socket = io(server_url!, { autoConnect: false });



export default socket;