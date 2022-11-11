import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import LeftWindow from "../components/LeftWindow";
import RightWindow from "../components/RightWindow";
import TopBar from "../components/NavBar";
import GlobalContext from "../contexts/GlobalContext";
// import socket from "../utils/socket";

const Chat = () => {
  const {
    // user,
    // room,
    // setLatestMessages,
    // latestMessages,
    // newMessages,
    // setNewMessages,
  } = useContext(GlobalContext);

  return (
    <>
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
    </>
  );
};

export default Chat;
