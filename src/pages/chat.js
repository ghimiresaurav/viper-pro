import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import LeftWindow from "../components/LeftWindow";
import RightWindow from "../components/RightWindow";
import TopBar from "../components/NavBar";
import GlobalContext from "../contexts/GlobalContext";
import socket from "../utils/socket";

const Chat = () => {
  const [room, setRoom] = useState({ name: "", _id: "" });
  const [latestMessages, setLatestMessages] = useState({});

  useEffect(() => {
    socket.emit("join", localStorage.getItem("user"));
    socket.on("message-received", (message) => {
      setLatestMessages({
        ...latestMessages,
        [message.room]: { message: message.message, time: message.time },
      });
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{ room, setRoom, latestMessages, setLatestMessages }}
    >
      <TopBar />
      <Box
        sx={{
          display: "flex",
          height: "91vh",
          backgroundColor: "#E5E3E4",
          overflow: "hidden",
        }}
      >
        <LeftWindow />
        <RightWindow />
      </Box>
    </GlobalContext.Provider>
  );
};

export default Chat;
