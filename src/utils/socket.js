import * as io from "socket.io-client";

const socket = io.connect("http://localhost:7000");
export default socket;
