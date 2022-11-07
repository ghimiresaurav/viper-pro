import { Box, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const ChatRoom = (props) => {
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
              {props.chat.message}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                ml: 1,
              }}
            >
              {props.chat.time}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatRoom;
