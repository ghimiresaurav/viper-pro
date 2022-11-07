import { Box, List, ListItemButton, Typography } from "@mui/material";
import { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import chats from "../../data/chats";
import ChatRoom from "./ChatRoom";

const LeftWindow = (props) => {
  const [index, setIndex] = useState("adsfd");
  return (
    <Box
      sx={{
        width: "22%",
        padding: "none",
        height: "100%",
        // backgroundColor: "red",
      }}
    >
      <Box sx={{ backgroundColor: "transparent", height: "50px" }}></Box>
      <List>
        {chats.map((chat) => (
          <ListItemButton
            sx={{ p: 0 }}
            key={chat._id}
            selected={chat._id === index}
            onClick={() => setIndex(chat._id)}
          >
            <ChatRoom chat={chat}></ChatRoom>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default LeftWindow;
