import { Box } from "@mui/material";
import React from "react";
import LeftWindow from "../components/LeftWindow";
import RightWindow from "../components/RightWindow";
import TopBar from "../components/NavBar";

const Chat = () => {
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
