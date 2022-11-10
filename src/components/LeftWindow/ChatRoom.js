import { Box, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import GlobalContext from "../../contexts/GlobalContext";
import { useContext } from "react";
import socket from "../../utils/socket";
import { formatTime } from "../../utils/formatTime";

const ChatRoom = (props) => {
  const { setRoom, latestMessages } = useContext(GlobalContext);

  return (
    <Box
      sx={{
        height: "70px",
        width: "100%",
        "&:hover": {
          backgroundColor: "#BBC6C8",
          //   (theme) => theme.palette.gray.main,
        },
      }}
      onClick={() => {
        setRoom(props.chat);
        socket.emit("join-room", props.chat._id);
      }}
    >
      <Box sx={{ display: "flex", padding: "10px" }}>
        <AccountCircle sx={{ fontSize: 55 }} />
        <Box sx={{ paddingTop: "3px" }}>
          <Typography
            sx={{
              fontSize: 17,
            }}
          >
            {props.chat.name}
          </Typography>
          <Box display="flex">
            <Typography
              sx={{
                fontSize: 14,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "180px",
              }}
            >
              {/* If there is latest message, show that. Otherwise, show the message coming from the data */}
              {latestMessages && latestMessages[props.chat._id]
                ? latestMessages[props.chat._id].message
                : props.chat.latestMessage}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                ml: 1,
              }}
            >
              {/* If there is time of the latest message, show that. Otherwise, show the time coming from the data */}
              {latestMessages && latestMessages[props.chat._id]
                ? formatTime(latestMessages[props.chat._id].time)
                : formatTime(props.chat.time)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatRoom;
