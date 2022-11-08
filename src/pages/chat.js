import { Box } from "@mui/material";
import React, { useState } from "react";
import LeftWindow from "../components/LeftWindow";
import RightWindow from "../components/RightWindow";
import TopBar from "../components/NavBar";
import GlobalContext from "../contexts/GlobalContext";

const Chat = () => {
  const [room, setRoom] = useState({ name: "", _id: "" });

  return (
    <GlobalContext.Provider value={{ room, setRoom }}>
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
