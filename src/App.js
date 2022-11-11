import { ThemeProvider } from "@emotion/react";
import "./App.css";
import theme from "./config/theme";
import Chat from "./pages/Chat";
import GlobalContext from "./contexts/GlobalContext";
import { useState, useEffect } from "react";
// import socket from "../utils/socket";
import socket from "./utils/socket";

function App() {
  const [room, setRoom] = useState({ name: "", _id: "" });
  const [latestMessages, setLatestMessages] = useState({});
  const [newMessages, setNewMessages] = useState([]);

  const user = localStorage.getItem("user")
    ? localStorage.getItem("user")
    : "6360057b5b21d25339bcf1ef";

  useEffect(() => {
    socket.emit("join", user);
    socket.on("message-received", (message) => {
      setLatestMessages({
        ...latestMessages,
        [message.room]: { body: message.body, time: message.time },
      });
      setNewMessages([...newMessages, message]);

      console.log(room._id);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        room,
        setRoom,
        latestMessages,
        setLatestMessages,
        newMessages,
        setNewMessages,
        user,
      }}
    >
      <ThemeProvider theme={theme}>
        <Chat />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
